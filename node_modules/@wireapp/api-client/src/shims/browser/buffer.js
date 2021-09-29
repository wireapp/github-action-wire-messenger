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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.concatToBuffer = exports.base64MD5FromBuffer = exports.bufferToString = void 0;
const SparkMD5 = __importStar(require("spark-md5"));
// Note: In favour of 'TextDecoder' which is not supported in MS Edge
const bufferToString = (buffer) => {
    let binaryString = '';
    const bytes = new Uint8Array(buffer);
    for (let index = 0; index < bytes.length; index++) {
        binaryString += String.fromCharCode(bytes[index]);
    }
    return binaryString;
};
exports.bufferToString = bufferToString;
const base64MD5FromBuffer = (buffer) => window.btoa(SparkMD5.ArrayBuffer.hash(buffer, true));
exports.base64MD5FromBuffer = base64MD5FromBuffer;
const concatToBuffer = (...items) => new Blob(items);
exports.concatToBuffer = concatToBuffer;
//# sourceMappingURL=buffer.js.map