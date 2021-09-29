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
exports.PasswordExistsError = exports.ForbiddenPhoneNumberError = exports.InvalidPhoneNumberError = exports.MissingCookieError = exports.InvalidTokenError = exports.TokenExpiredError = exports.IdentifierExistsError = exports.SuspendedAccountError = exports.InvalidCredentialsError = exports.LoginTooFrequentError = exports.AuthenticationError = void 0;
const http_1 = require("../http/");
class AuthenticationError extends http_1.BackendError {
    constructor(message, label, code) {
        super(message, label, code);
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = 'AuthenticationError';
    }
}
exports.AuthenticationError = AuthenticationError;
class LoginTooFrequentError extends AuthenticationError {
    constructor(message, label = http_1.BackendErrorLabel.CLIENT_ERROR, code = http_1.StatusCode.TOO_MANY_REQUESTS) {
        super(message, label, code);
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = 'LoginTooFrequentError';
    }
}
exports.LoginTooFrequentError = LoginTooFrequentError;
class InvalidCredentialsError extends AuthenticationError {
    constructor(message, label = http_1.BackendErrorLabel.INVALID_CREDENTIALS, code = http_1.StatusCode.FORBIDDEN) {
        super(message, label, code);
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = 'InvalidCredentialsError';
    }
}
exports.InvalidCredentialsError = InvalidCredentialsError;
class SuspendedAccountError extends AuthenticationError {
    constructor(message, label = http_1.BackendErrorLabel.SUSPENDED_ACCOUNT, code = http_1.StatusCode.FORBIDDEN) {
        super(message, label, code);
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = 'SuspendedAccountError';
    }
}
exports.SuspendedAccountError = SuspendedAccountError;
class IdentifierExistsError extends AuthenticationError {
    constructor(message, label = http_1.BackendErrorLabel.KEY_EXISTS, code = http_1.StatusCode.CONFLICT) {
        super(message, label, code);
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = 'IdentifierExistsError';
    }
}
exports.IdentifierExistsError = IdentifierExistsError;
class TokenExpiredError extends AuthenticationError {
    constructor(message, label = http_1.BackendErrorLabel.INVALID_CREDENTIALS, code = http_1.StatusCode.FORBIDDEN) {
        super(message, label, code);
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = 'TokenExpiredError';
    }
}
exports.TokenExpiredError = TokenExpiredError;
class InvalidTokenError extends AuthenticationError {
    constructor(message, label = http_1.BackendErrorLabel.INVALID_CREDENTIALS, code = http_1.StatusCode.FORBIDDEN) {
        super(message, label, code);
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = 'InvalidTokenError';
    }
}
exports.InvalidTokenError = InvalidTokenError;
class MissingCookieError extends AuthenticationError {
    constructor(message, label = http_1.BackendErrorLabel.INVALID_CREDENTIALS, code = http_1.StatusCode.FORBIDDEN) {
        super(message, label, code);
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = 'MissingCookieError';
    }
}
exports.MissingCookieError = MissingCookieError;
class InvalidPhoneNumberError extends AuthenticationError {
    constructor(message, label = http_1.SyntheticErrorLabel.INVALID_PHONE_NUMBER, code = http_1.StatusCode.BAD_REQUEST) {
        super(message, label, code);
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = 'InvalidPhoneNumberError';
    }
}
exports.InvalidPhoneNumberError = InvalidPhoneNumberError;
class ForbiddenPhoneNumberError extends AuthenticationError {
    constructor(message, label = http_1.SyntheticErrorLabel.FORBIDDEN_PHONE_NUMBER, code = http_1.StatusCode.FORBIDDEN) {
        super(message, label, code);
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = 'ForbiddenPhoneNumberError';
    }
}
exports.ForbiddenPhoneNumberError = ForbiddenPhoneNumberError;
class PasswordExistsError extends AuthenticationError {
    constructor(message, label = http_1.BackendErrorLabel.PASSWORD_EXISTS, code = http_1.StatusCode.UNAUTHORIZED) {
        super(message, label, code);
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = 'PasswordExistsError';
    }
}
exports.PasswordExistsError = PasswordExistsError;
//# sourceMappingURL=AuthenticationError.js.map