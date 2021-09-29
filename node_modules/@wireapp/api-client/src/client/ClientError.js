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
exports.ClientCapabilityRemovedError = exports.ClientError = void 0;
const http_1 = require("../http");
class ClientError extends http_1.BackendError {
    constructor(message, label, code) {
        super(message, label, code);
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = 'ClientError';
    }
}
exports.ClientError = ClientError;
class ClientCapabilityRemovedError extends ClientError {
    constructor(message, label = http_1.BackendErrorLabel.CLIENT_CAPABILITY_REMOVED, code = http_1.StatusCode.CONFLICT) {
        super(message, label, code);
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = 'ClientCapabilityRemovedError';
    }
}
exports.ClientCapabilityRemovedError = ClientCapabilityRemovedError;
//# sourceMappingURL=ClientError.js.map