"use strict";
/*
 * Wire
 * Copyright (C) 2020 Wire Swiss GmbH
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
exports.CustomBackendNotFoundError = exports.AccountError = void 0;
const http_1 = require("../http");
class AccountError extends http_1.BackendError {
    constructor(message, label, code) {
        super(message, label, code);
        Object.setPrototypeOf(this, AccountError.prototype);
        this.name = 'AccountError';
    }
}
exports.AccountError = AccountError;
class CustomBackendNotFoundError extends AccountError {
    constructor(message, label = http_1.BackendErrorLabel.CUSTOM_BACKEND_NOT_FOUND, code = http_1.StatusCode.NOT_FOUND) {
        super(message, label, code);
        Object.setPrototypeOf(this, CustomBackendNotFoundError.prototype);
        this.name = 'CustomBackendNotFoundError';
    }
}
exports.CustomBackendNotFoundError = CustomBackendNotFoundError;
//# sourceMappingURL=AccountError.js.map