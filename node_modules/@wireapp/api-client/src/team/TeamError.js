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
exports.ServiceNotFoundError = exports.InvalidInvitationCodeError = exports.InviteEmailInUseError = exports.TeamError = void 0;
const http_1 = require("../http/");
class TeamError extends http_1.BackendError {
    constructor(message, label, code) {
        super(message, label, code);
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = 'ConversationError';
    }
}
exports.TeamError = TeamError;
class InviteEmailInUseError extends TeamError {
    constructor(message, label = http_1.BackendErrorLabel.INVITE_EMAIL_EXISTS, code = http_1.StatusCode.CONFLICT) {
        super(message, label, code);
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = 'InviteEmailInUseError';
    }
}
exports.InviteEmailInUseError = InviteEmailInUseError;
class InvalidInvitationCodeError extends TeamError {
    constructor(message, label = http_1.BackendErrorLabel.INVALID_INVITATION_CODE, code = http_1.StatusCode.BAD_REQUEST) {
        super(message, label, code);
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = 'InvalidInvitationCodeError';
    }
}
exports.InvalidInvitationCodeError = InvalidInvitationCodeError;
class ServiceNotFoundError extends TeamError {
    constructor(message, label = http_1.SyntheticErrorLabel.SERVICE_NOT_FOUND, code = http_1.StatusCode.NOT_FOUND) {
        super(message, label, code);
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = 'ServiceNotFoundError';
    }
}
exports.ServiceNotFoundError = ServiceNotFoundError;
//# sourceMappingURL=TeamError.js.map