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
exports.AccessTokenStore = void 0;
const events_1 = require("events");
const logdown_1 = __importDefault(require("logdown"));
var TOPIC;
(function (TOPIC) {
    TOPIC["ACCESS_TOKEN_REFRESH"] = "AccessTokenStore.TOPIC.ACCESS_TOKEN_REFRESH";
})(TOPIC || (TOPIC = {}));
class AccessTokenStore extends events_1.EventEmitter {
    constructor() {
        super();
        this.logger = (0, logdown_1.default)('@wireapp/api-client/AccessTokenStore', {
            logger: console,
            markdown: false,
        });
    }
    async delete() {
        this.logger.log('Deleting local access token');
        this.accessToken = undefined;
    }
    async updateToken(accessToken) {
        if (this.accessToken !== accessToken) {
            this.logger.log('Saving local access token');
            this.accessToken = accessToken;
            this.emit(AccessTokenStore.TOPIC.ACCESS_TOKEN_REFRESH, this.accessToken);
        }
        return this.accessToken;
    }
}
exports.AccessTokenStore = AccessTokenStore;
AccessTokenStore.TOPIC = TOPIC;
//# sourceMappingURL=AccessTokenStore.js.map