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
exports.BackendErrorMapper = void 0;
const auth_1 = require("../auth/");
const conversation_1 = require("../conversation/");
const team_1 = require("../team/");
const user_1 = require("../user/");
const _1 = require("./");
class BackendErrorMapper {
    static get ERRORS() {
        return {
            [_1.StatusCode.BAD_REQUEST]: {
                [_1.BackendErrorLabel.CLIENT_ERROR]: {
                    'Error in $: Failed reading: satisfy': new _1.BackendError('Wrong set of parameters.'),
                    "[path] 'cnv' invalid: Failed reading: Invalid UUID": new conversation_1.ConversationIsUnknownError('Conversation ID is unknown.'),
                    "[path] 'usr' invalid: Failed reading: Invalid UUID": new user_1.UserIsUnknownError('User ID is unknown.'),
                },
                [_1.BackendErrorLabel.INVALID_INVITATION_CODE]: {
                    'Invalid invitation code.': new team_1.InvalidInvitationCodeError('Invalid invitation code.'),
                },
            },
            [_1.StatusCode.FORBIDDEN]: {
                [_1.BackendErrorLabel.INVALID_CREDENTIALS]: {
                    'Authentication failed.': new auth_1.InvalidCredentialsError('Authentication failed because of invalid credentials.'),
                    'Invalid token': new auth_1.InvalidTokenError('Authentication failed because the token is invalid.'),
                    'Missing cookie': new auth_1.MissingCookieError('Authentication failed because the cookie is missing.'),
                    'Token expired': new auth_1.TokenExpiredError('Authentication failed because the token is expired.'),
                },
                [_1.BackendErrorLabel.NOT_CONNECTED]: {
                    'Users are not connected': new user_1.UnconnectedUserError('Users are not connected.'),
                },
                [_1.BackendErrorLabel.INVALID_OPERATION]: {
                    'invalid operation for 1:1 conversations': new conversation_1.ConversationOperationError('Cannot leave 1:1 conversation.'),
                },
                [_1.BackendErrorLabel.SUSPENDED_ACCOUNT]: {
                    'Account suspended.': new auth_1.SuspendedAccountError('Account suspended.'),
                },
            },
            [_1.StatusCode.TOO_MANY_REQUESTS]: {
                [_1.BackendErrorLabel.CLIENT_ERROR]: {
                    'Logins too frequent': new auth_1.LoginTooFrequentError('Logins too frequent. User login temporarily disabled.'),
                },
            },
            [_1.StatusCode.CONFLICT]: {
                [_1.BackendErrorLabel.INVITE_EMAIL_EXISTS]: {
                    'The given e-mail address is in use.': new team_1.InviteEmailInUseError('The given e-mail address is in use.'),
                },
                [_1.BackendErrorLabel.KEY_EXISTS]: {
                    'The given e-mail address or phone number is in use.': new auth_1.IdentifierExistsError('The given e-mail address or phone number is in use.'),
                },
            },
            [_1.StatusCode.NOT_FOUND]: {
                [_1.BackendErrorLabel.NOT_FOUND]: {
                    'Service not found': new team_1.ServiceNotFoundError('Service not found'),
                },
            },
        };
    }
    static map(error) {
        try {
            const mappedError = BackendErrorMapper.ERRORS[Number(error.code)][error.label][error.message];
            if (mappedError) {
                return mappedError;
            }
            return error;
        }
        catch (mappingError) {
            return error;
        }
    }
}
exports.BackendErrorMapper = BackendErrorMapper;
//# sourceMappingURL=BackendErrorMapper.js.map