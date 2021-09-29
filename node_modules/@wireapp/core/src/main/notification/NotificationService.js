"use strict";
/*
 * Wire
 * Copyright (C) 2018 Wire Swiss GmbH
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see http://www.gnu.org/licenses/.
 *
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationService = void 0;
const Events = __importStar(require("@wireapp/api-client/src/event"));
const store_engine_1 = require("@wireapp/store-engine");
const events_1 = require("events");
const logdown_1 = __importDefault(require("logdown"));
const conversation_1 = require("../conversation");
const ConversationMapper_1 = require("../conversation/ConversationMapper");
const CoreError_1 = require("../CoreError");
const UserMapper_1 = require("../user/UserMapper");
const NotificationBackendRepository_1 = require("./NotificationBackendRepository");
const NotificationDatabaseRepository_1 = require("./NotificationDatabaseRepository");
var TOPIC;
(function (TOPIC) {
    TOPIC["NOTIFICATION_ERROR"] = "NotificationService.TOPIC.NOTIFICATION_ERROR";
})(TOPIC || (TOPIC = {}));
class NotificationService extends events_1.EventEmitter {
    constructor(apiClient, cryptographyService, storeEngine) {
        super();
        this.logger = (0, logdown_1.default)('@wireapp/core/notification/NotificationService', {
            logger: console,
            markdown: false,
        });
        this.handleNotification = async (notification, source) => {
            for (const event of notification.payload) {
                let data;
                try {
                    this.logger.log(`Handling event of type "${event.type}" for notification with ID "${notification.id}"`, event);
                    data = await this.handleEvent(event, source);
                    if (!notification.transient) {
                        await this.setLastNotificationId(notification);
                    }
                }
                catch (error) {
                    this.logger.error(`There was an error with notification ID "${notification.id}": ${error.message}`, error);
                    const notificationError = {
                        error: error,
                        notification,
                        type: CoreError_1.CoreError.NOTIFICATION_ERROR,
                    };
                    this.emit(NotificationService.TOPIC.NOTIFICATION_ERROR, notificationError);
                    continue;
                }
                if (data) {
                    switch (data.type) {
                        case conversation_1.PayloadBundleType.ASSET_IMAGE:
                        case conversation_1.PayloadBundleType.BUTTON_ACTION:
                        case conversation_1.PayloadBundleType.CALL:
                        case conversation_1.PayloadBundleType.CLIENT_ACTION:
                        case conversation_1.PayloadBundleType.CLIENT_ADD:
                        case conversation_1.PayloadBundleType.CLIENT_REMOVE:
                        case conversation_1.PayloadBundleType.CONFIRMATION:
                        case conversation_1.PayloadBundleType.CONNECTION_REQUEST:
                        case conversation_1.PayloadBundleType.LOCATION:
                        case conversation_1.PayloadBundleType.MESSAGE_DELETE:
                        case conversation_1.PayloadBundleType.MESSAGE_EDIT:
                        case conversation_1.PayloadBundleType.MESSAGE_HIDE:
                        case conversation_1.PayloadBundleType.PING:
                        case conversation_1.PayloadBundleType.REACTION:
                        case conversation_1.PayloadBundleType.TEXT:
                        case conversation_1.PayloadBundleType.USER_UPDATE:
                            this.emit(data.type, data);
                            break;
                        case conversation_1.PayloadBundleType.ASSET: {
                            const assetContent = data.content;
                            const isMetaData = !!assetContent && !!assetContent.original && !assetContent.uploaded;
                            const isAbort = !!assetContent.abortReason || (!assetContent.original && !assetContent.uploaded);
                            if (isMetaData) {
                                data.type = conversation_1.PayloadBundleType.ASSET_META;
                                this.emit(conversation_1.PayloadBundleType.ASSET_META, data);
                            }
                            else if (isAbort) {
                                data.type = conversation_1.PayloadBundleType.ASSET_ABORT;
                                this.emit(conversation_1.PayloadBundleType.ASSET_ABORT, data);
                            }
                            else {
                                this.emit(conversation_1.PayloadBundleType.ASSET, data);
                            }
                            break;
                        }
                        case conversation_1.PayloadBundleType.TIMER_UPDATE:
                        case conversation_1.PayloadBundleType.CONVERSATION_RENAME:
                        case conversation_1.PayloadBundleType.CONVERSATION_CLEAR:
                        case conversation_1.PayloadBundleType.MEMBER_JOIN:
                        case conversation_1.PayloadBundleType.TYPING:
                            this.emit(data.type, event);
                            break;
                    }
                }
                else {
                    const { type, conversation, from } = event;
                    const conversationText = conversation ? ` in conversation "${conversation}"` : '';
                    const fromText = from ? ` from user "${from}".` : '';
                    this.logger.log(`Received unsupported event "${type}"${conversationText}${fromText}`, { event });
                }
            }
        };
        this.apiClient = apiClient;
        this.cryptographyService = cryptographyService;
        this.backend = new NotificationBackendRepository_1.NotificationBackendRepository(this.apiClient);
        this.database = new NotificationDatabaseRepository_1.NotificationDatabaseRepository(storeEngine);
    }
    async getAllNotifications() {
        const clientId = this.apiClient.clientId;
        const lastNotificationId = await this.database.getLastNotificationId();
        return this.backend.getAllNotifications(clientId, lastNotificationId);
    }
    /** Should only be called with a completely new client. */
    async initializeNotificationStream() {
        const clientId = this.apiClient.clientId;
        await this.setLastEventDate(new Date(0));
        const latestNotification = await this.backend.getLastNotification(clientId);
        return this.setLastNotificationId(latestNotification);
    }
    async hasHistory() {
        const notificationEvents = await this.getNotificationEventList();
        return !!notificationEvents.length;
    }
    getNotificationEventList() {
        return this.database.getNotificationEventList();
    }
    async setLastEventDate(eventDate) {
        let databaseLastEventDate;
        try {
            databaseLastEventDate = await this.database.getLastEventDate();
        }
        catch (error) {
            if (error instanceof store_engine_1.error.RecordNotFoundError ||
                error.constructor.name === store_engine_1.error.RecordNotFoundError.name) {
                return this.database.createLastEventDate(eventDate);
            }
            throw error;
        }
        if (databaseLastEventDate && eventDate > databaseLastEventDate) {
            return this.database.updateLastEventDate(eventDate);
        }
        return databaseLastEventDate;
    }
    async setLastNotificationId(lastNotification) {
        return this.database.updateLastNotificationId(lastNotification);
    }
    async handleNotificationStream(notificationHandler) {
        const notifications = await this.getAllNotifications();
        for (const notification of notifications) {
            await notificationHandler(notification, conversation_1.PayloadBundleSource.NOTIFICATION_STREAM).catch(error => this.logger.error(error));
        }
    }
    async handleEvent(event, source) {
        switch (event.type) {
            // Encrypted events
            case Events.CONVERSATION_EVENT.OTR_MESSAGE_ADD: {
                return this.cryptographyService.decodeGenericMessage(event, source);
            }
            // Meta events
            case Events.CONVERSATION_EVENT.MEMBER_JOIN:
            case Events.CONVERSATION_EVENT.MESSAGE_TIMER_UPDATE:
            case Events.CONVERSATION_EVENT.RENAME:
            case Events.CONVERSATION_EVENT.TYPING: {
                const { conversation, from } = event;
                const metaEvent = Object.assign(Object.assign({}, event), { conversation, from });
                return ConversationMapper_1.ConversationMapper.mapConversationEvent(metaEvent, source);
            }
            // User events
            case Events.USER_EVENT.CONNECTION:
            case Events.USER_EVENT.CLIENT_ADD:
            case Events.USER_EVENT.UPDATE:
            case Events.USER_EVENT.CLIENT_REMOVE: {
                return UserMapper_1.UserMapper.mapUserEvent(event, this.apiClient.context.userId, source);
            }
        }
    }
}
exports.NotificationService = NotificationService;
NotificationService.TOPIC = TOPIC;
//# sourceMappingURL=NotificationService.js.map