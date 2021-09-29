"use strict";
/*
 * Wire
 * Copyright (C) 2021 Wire Swiss GmbH
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
exports.parseAccessToken = exports.parseValue = exports.AccessTokenType = void 0;
var AccessTokenType;
(function (AccessTokenType) {
    AccessTokenType["ACCESS_DATA"] = "access-data";
    AccessTokenType["USER_DATA"] = "user-data";
})(AccessTokenType = exports.AccessTokenType || (exports.AccessTokenType = {}));
function parseValue(text, key) {
    const pattern = `${key}=`;
    const start = text.indexOf(pattern);
    if (start === -1) {
        return '';
    }
    const payload = text.substr(start + pattern.length);
    const stop = payload.indexOf('.') === -1 ? payload.length : payload.indexOf('.');
    return payload.substr(0, stop);
}
exports.parseValue = parseValue;
function parseAccessToken(accessToken) {
    const tokenVersion = parseValue(accessToken, 'v');
    if (tokenVersion !== '1') {
        throw new Error(`Unsupported access token version "${tokenVersion}".`);
    }
    const expirationDateInMillis = Number(parseValue(accessToken, 'd')) * 1000;
    return {
        clientId: parseValue(accessToken, 'c'),
        expirationDate: new Date(expirationDateInMillis),
        keyIndex: Number(parseValue(accessToken, 'k')),
        tag: parseValue(accessToken, 'l'),
        token: accessToken.split('.')[0],
        type: parseValue(accessToken, 't') === 'a' ? AccessTokenType.ACCESS_DATA : AccessTokenType.USER_DATA,
        userData: parseValue(accessToken, 'r'),
        userId: parseValue(accessToken, 'u'),
        version: Number(tokenVersion),
    };
}
exports.parseAccessToken = parseAccessToken;
//# sourceMappingURL=parseAccessToken.js.map