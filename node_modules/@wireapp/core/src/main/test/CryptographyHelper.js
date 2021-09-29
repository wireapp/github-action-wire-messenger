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
exports.getPlainText = exports.createEncodedCipherText = void 0;
const cryptobox_1 = require("@wireapp/cryptobox");
const proteus_1 = require("@wireapp/proteus");
const bazinga64 = __importStar(require("bazinga64"));
const StoreHelper = require('./StoreHelper');
async function createEncodedCipherText(receiver, preKey, text) {
    await (0, proteus_1.init)();
    const senderEngine = await StoreHelper.createMemoryEngine();
    const sender = new cryptobox_1.Cryptobox(senderEngine, 1);
    await sender.create();
    const sessionId = `from-${sender['identity'].public_key.fingerprint()}-to-${preKey.key_pair.public_key.fingerprint()}`;
    const alicePublicKey = receiver.public_key;
    const publicPreKeyBundle = new proteus_1.keys.PreKeyBundle(alicePublicKey, preKey);
    const encryptedPreKeyMessage = await sender.encrypt(sessionId, text, publicPreKeyBundle.serialise());
    return bazinga64.Encoder.toBase64(encryptedPreKeyMessage).asString;
}
exports.createEncodedCipherText = createEncodedCipherText;
async function getPlainText(cryptographyService, encodedPreKeyMessage, sessionId = `temp-${Date.now()}`) {
    try {
        const decryptedMessage = await cryptographyService.decrypt(sessionId, encodedPreKeyMessage);
        return Buffer.from(decryptedMessage).toString('utf8');
    }
    catch (error) { }
}
exports.getPlainText = getPlainText;
//# sourceMappingURL=CryptographyHelper.js.map