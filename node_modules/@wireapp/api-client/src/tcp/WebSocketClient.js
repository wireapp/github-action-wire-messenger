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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebSocketClient = exports.AbortHandler = void 0;
const events_1 = require("events");
const logdown_1 = __importDefault(require("logdown"));
const http_1 = require("../http/");
const auth_1 = require("../auth/");
const ReconnectingWebsocket_1 = require("./ReconnectingWebsocket");
var TOPIC;
(function (TOPIC) {
    TOPIC["ON_ERROR"] = "WebSocketClient.TOPIC.ON_ERROR";
    TOPIC["ON_INVALID_TOKEN"] = "WebSocketClient.TOPIC.ON_INVALID_TOKEN";
    TOPIC["ON_MESSAGE"] = "WebSocketClient.TOPIC.ON_MESSAGE";
    TOPIC["ON_STATE_CHANGE"] = "WebSocketClient.TOPIC.ON_STATE_CHANGE";
})(TOPIC || (TOPIC = {}));
class AbortHandler {
    constructor() {
        this.aborted = false;
        this.abort = () => {
            this.aborted = true;
        };
        this.isAborted = () => this.aborted;
    }
}
exports.AbortHandler = AbortHandler;
class WebSocketClient extends events_1.EventEmitter {
    constructor(baseUrl, client) {
        super();
        this.onConnect = () => Promise.resolve();
        this.onMessage = (data) => {
            if (this.isLocked()) {
                this.bufferedMessages.push(data);
            }
            else {
                const notification = JSON.parse(data);
                this.emit(WebSocketClient.TOPIC.ON_MESSAGE, notification);
            }
        };
        this.onError = async (error) => {
            this.onStateChange(this.socket.getState());
            this.emit(WebSocketClient.TOPIC.ON_ERROR, error);
            await this.refreshAccessToken();
        };
        this.onReconnect = async () => {
            // Note: Do NOT await `onConnect` otherwise the websocket will not connect during notification stream processing
            void this.onConnect();
            return this.buildWebSocketUrl();
        };
        this.onOpen = (event) => {
            this.onStateChange(this.socket.getState());
        };
        this.onClose = (event) => {
            var _a;
            (_a = this.abortHandler) === null || _a === void 0 ? void 0 : _a.abort();
            this.bufferedMessages = [];
            this.onStateChange(this.socket.getState());
        };
        /**
         * Unlocks the websocket.
         * When unlocking the websocket all buffered messages between
         * connecting the websocket and the unlocking the websocket will be emitted.
         */
        this.unlock = () => {
            this.logger.info(`Unlocking WebSocket - Emitting "${this.bufferedMessages.length}" unprocessed messages`);
            this.isSocketLocked = false;
            for (const bufferedMessage of this.bufferedMessages) {
                this.onMessage(bufferedMessage);
            }
            this.bufferedMessages = [];
        };
        /**
         * Locks the websocket so messages are buffered instead of being emitted.
         * Once the websocket gets unlocked buffered messages get emitted.
         * This behaviour is needed in order to not miss any messages
         * during fetching notifications from the notification stream.
         */
        this.lock = () => {
            this.logger.info('Locking WebSocket');
            this.isSocketLocked = true;
        };
        this.bufferedMessages = [];
        this.isSocketLocked = false;
        this.baseUrl = baseUrl;
        this.client = client;
        this.isRefreshingAccessToken = false;
        this.socket = new ReconnectingWebsocket_1.ReconnectingWebsocket(this.onReconnect);
        this.websocketState = this.socket.getState();
        this.logger = (0, logdown_1.default)('@wireapp/api-client/tcp/WebSocketClient', {
            logger: console,
            markdown: false,
        });
    }
    onStateChange(newState) {
        if (newState !== this.websocketState) {
            this.websocketState = newState;
            this.emit(WebSocketClient.TOPIC.ON_STATE_CHANGE, this.websocketState);
        }
    }
    /**
     * Attaches all listeners to the websocket and establishes the connection.
     *
     * @param clientId
     * When provided the websocket will get messages specific to the client.
     * If omitted the websocket will receive global messages for the account.
     *
     * @param onConnect
     * Handler that is executed before the websocket is fully connected.
     * Essentially the websocket will lock before execution of this function and
     * unlocks after the execution of the handler and pushes all buffered messages.
     */
    async connect(clientId, onConnect) {
        if (onConnect) {
            this.onConnect = async () => {
                this.abortHandler = new AbortHandler();
                try {
                    this.logger.info('Calling "onConnect"');
                    await onConnect(this.abortHandler);
                }
                catch (error) {
                    this.logger.warn(`Error during execution of "onConnect"`, error);
                    this.emit(WebSocketClient.TOPIC.ON_ERROR, error);
                }
                this.onStateChange(this.socket.getState());
            };
        }
        this.clientId = clientId;
        this.socket.setOnMessage(this.onMessage);
        this.socket.setOnError(this.onError);
        this.socket.setOnOpen(this.onOpen);
        this.socket.setOnClose(this.onClose);
        this.socket.connect();
        return this;
    }
    async refreshAccessToken() {
        if (this.isRefreshingAccessToken) {
            return;
        }
        this.isRefreshingAccessToken = true;
        try {
            await this.client.refreshAccessToken();
        }
        catch (error) {
            if (error instanceof http_1.NetworkError) {
                this.logger.warn(error);
            }
            else if (error instanceof auth_1.InvalidTokenError || error instanceof auth_1.MissingCookieError) {
                // On invalid cookie the application is supposed to logout.
                this.logger.warn(`[WebSocket] Cannot renew access token because cookie/token is invalid: ${error.message}`, error);
                this.emit(WebSocketClient.TOPIC.ON_INVALID_TOKEN, error);
            }
            else {
                this.emit(WebSocketClient.TOPIC.ON_ERROR, error);
            }
        }
        finally {
            this.isRefreshingAccessToken = false;
        }
    }
    disconnect(reason, keepClosed = true) {
        if (this.socket) {
            this.socket.disconnect(reason, keepClosed);
        }
    }
    isLocked() {
        return this.isSocketLocked;
    }
    buildWebSocketUrl() {
        const store = this.client.accessTokenStore.accessToken;
        const token = store && store.access_token ? store.access_token : '';
        if (!token) {
            this.logger.warn('Reconnecting WebSocket with unset token');
        }
        let url = `${this.baseUrl}/await?access_token=${token}`;
        if (this.clientId) {
            // Note: If no client ID is given, then the WebSocket connection will receive all notifications for all clients
            // of the connected user
            url += `&client=${this.clientId}`;
        }
        return url;
    }
}
exports.WebSocketClient = WebSocketClient;
WebSocketClient.TOPIC = TOPIC;
//# sourceMappingURL=WebSocketClient.js.map