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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageTimer = void 0;
class MessageTimer {
    constructor() {
        this.conversationLevelTimers = new Map();
        this.messageLevelTimers = new Map();
    }
    getConversationLevelTimer(conversationId) {
        return this.conversationLevelTimers.get(conversationId) || 0;
    }
    getMessageLevelTimer(conversationId) {
        return this.messageLevelTimers.get(conversationId) || 0;
    }
    getMessageTimer(conversationId) {
        return this.getConversationLevelTimer(conversationId) || this.getMessageLevelTimer(conversationId);
    }
    setConversationLevelTimer(conversationId, messageTimer) {
        if (messageTimer === 0) {
            this.conversationLevelTimers.delete(conversationId);
        }
        else {
            this.conversationLevelTimers.set(conversationId, messageTimer);
        }
    }
    setMessageLevelTimer(conversationId, messageTimer) {
        if (messageTimer === 0) {
            this.messageLevelTimers.delete(conversationId);
        }
        else {
            this.messageLevelTimers.set(conversationId, messageTimer);
        }
    }
}
exports.MessageTimer = MessageTimer;
//# sourceMappingURL=MessageTimer.js.map