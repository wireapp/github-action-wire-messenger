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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageHashService = void 0;
const hash = __importStar(require("hash.js"));
const long_1 = __importDefault(require("long"));
const content_1 = require("../conversation/content");
class MessageHashService {
    constructor(messageContent, timestamp = Date.now()) {
        this.messageContent = messageContent;
        const unixTimestamp = new Date(timestamp).getTime();
        this.timestamp = Math.floor(unixTimestamp / 1e3);
    }
    createSha256Hash(buffer) {
        const hashArray = hash.sha256().update(buffer).digest();
        return Buffer.from(hashArray);
    }
    convertToUtf16BE(str) {
        const BOMChar = '\uFEFF';
        str = `${BOMChar}${str}`;
        const buffer = Buffer.from(str, 'ucs2');
        for (let index = 0; index < buffer.length; index += 2) {
            const tempValue = buffer[index];
            buffer[index] = buffer[index + 1];
            buffer[index + 1] = tempValue;
        }
        return buffer;
    }
    getAssetBytes(content) {
        if (content.uploaded) {
            const assetId = content.uploaded.assetId;
            return this.convertToUtf16BE(assetId);
        }
        return Buffer.from([]);
    }
    getTimestampBuffer(timestamp) {
        const timestampBytes = long_1.default.fromInt(timestamp).toBytesBE();
        return Buffer.from(timestampBytes);
    }
    getLocationBytes(content) {
        const latitudeApproximate = Math.round(content.latitude * 1000);
        const longitudeApproximate = Math.round(content.longitude * 1000);
        const latitudeLong = long_1.default.fromInt(latitudeApproximate).toBytesBE();
        const longitudeLong = long_1.default.fromInt(longitudeApproximate).toBytesBE();
        const latitudeBuffer = Buffer.from(latitudeLong);
        const longitudeBuffer = Buffer.from(longitudeLong);
        return Buffer.concat([latitudeBuffer, longitudeBuffer]);
    }
    getTextBytes(content) {
        return this.convertToUtf16BE(content.text);
    }
    getBytes(content) {
        let bytes;
        if (content_1.ContentType.isLocationContent(content)) {
            bytes = this.getLocationBytes(content);
        }
        else if (content_1.ContentType.isTextContent(content)) {
            bytes = this.getTextBytes(content);
        }
        else if (content_1.ContentType.isAssetContent(content)) {
            bytes = this.getAssetBytes(content);
        }
        else {
            throw new Error(`Unknown message type. ${content}`);
        }
        const timestampBuffer = this.getTimestampBuffer(this.timestamp);
        return Buffer.concat([bytes, timestampBuffer]);
    }
    getHash() {
        const buffer = this.getBytes(this.messageContent);
        return this.createSha256Hash(buffer);
    }
}
exports.MessageHashService = MessageHashService;
//# sourceMappingURL=MessageHashService.js.map