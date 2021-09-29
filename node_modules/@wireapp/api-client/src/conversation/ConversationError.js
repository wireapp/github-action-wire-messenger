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
exports.ConversationFullError = exports.ConversationCodeNotFoundError = exports.ConversationLegalholdMissingConsentError = exports.ConversationOperationError = exports.ConversationIsUnknownError = exports.ConversationError = void 0;
const http_1 = require("../http/");
class ConversationError extends http_1.BackendError {
    constructor(message, label, code) {
        super(message, label, code);
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = 'ConversationError';
    }
}
exports.ConversationError = ConversationError;
class ConversationIsUnknownError extends ConversationError {
    constructor(message, label = http_1.BackendErrorLabel.CLIENT_ERROR, code = http_1.StatusCode.BAD_REQUEST) {
        super(message, label, code);
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = 'ConversationIsUnknownError';
    }
}
exports.ConversationIsUnknownError = ConversationIsUnknownError;
class ConversationOperationError extends ConversationError {
    constructor(message, label = http_1.BackendErrorLabel.INVALID_OPERATION, code = http_1.StatusCode.FORBIDDEN) {
        super(message, label, code);
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = 'ConversationOperationError';
    }
}
exports.ConversationOperationError = ConversationOperationError;
class ConversationLegalholdMissingConsentError extends ConversationError {
    constructor(message, label = http_1.BackendErrorLabel.LEGAL_HOLD_MISSING_CONSENT, code = http_1.StatusCode.PRECONDITION_FAILED) {
        super(message, label, code);
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = 'ConversationLegalholdConsentNeededError';
    }
}
exports.ConversationLegalholdMissingConsentError = ConversationLegalholdMissingConsentError;
class ConversationCodeNotFoundError extends ConversationError {
    constructor(message, label = http_1.BackendErrorLabel.NO_CONVERSATION_CODE, code = http_1.StatusCode.NOT_FOUND) {
        super(message, label, code);
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = 'ConversationCodeNotFoundError';
    }
}
exports.ConversationCodeNotFoundError = ConversationCodeNotFoundError;
class ConversationFullError extends ConversationError {
    constructor(message, label = http_1.BackendErrorLabel.TOO_MANY_MEMBERS, code = http_1.StatusCode.NOT_FOUND) {
        super(message, label, code);
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = 'ConversationFullError';
    }
}
exports.ConversationFullError = ConversationFullError;
//# sourceMappingURL=ConversationError.js.map