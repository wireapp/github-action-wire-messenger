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
exports.concatToBuffer = exports.base64MD5FromBuffer = exports.bufferToString = void 0;
const crypto_1 = require("crypto");
const bufferToString = (buffer) => Buffer.from(buffer).toString('utf8');
exports.bufferToString = bufferToString;
const base64MD5FromBuffer = (buffer) => {
    return (0, crypto_1.createHash)('md5').update(Buffer.from(buffer)).digest('base64');
};
exports.base64MD5FromBuffer = base64MD5FromBuffer;
const concatToBuffer = (...items) => Buffer.concat(items.map(item => Buffer.from(item)));
exports.concatToBuffer = concatToBuffer;
//# sourceMappingURL=buffer.js.map