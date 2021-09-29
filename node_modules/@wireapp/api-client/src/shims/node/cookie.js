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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendRequestWithCookie = exports.retrieveCookie = void 0;
const logdown_1 = __importDefault(require("logdown"));
const tough_cookie_1 = require("tough-cookie");
const auth_1 = require("../../auth/");
const obfuscation_1 = require("../../obfuscation/");
const CookieStore_1 = require("../../auth/CookieStore");
const logger = (0, logdown_1.default)('@wireapp/api-client/shims/node/cookie', {
    logger: console,
    markdown: false,
});
const retrieveCookie = async (response) => {
    var _a;
    if ((_a = response.headers) === null || _a === void 0 ? void 0 : _a['set-cookie']) {
        const cookies = response.headers['set-cookie'].map(tough_cookie_1.Cookie.parse);
        for (const cookie of cookies) {
            CookieStore_1.CookieStore.setCookie(new auth_1.Cookie(cookie.value, cookie.expires));
            logger.info(`Saved internal cookie. It will expire on "${cookie.expires}".`, obfuscation_1.ObfuscationUtil.obfuscateCookie(cookie));
        }
    }
    return response.data;
};
exports.retrieveCookie = retrieveCookie;
/**
 * @see https://github.com/wearezeta/backend-api-docs/wiki/API-User-Authentication#token-refresh
 */
const sendRequestWithCookie = async (client, config) => {
    const cookie = CookieStore_1.CookieStore.getCookie();
    if (cookie && !cookie.isExpired) {
        config.headers = config.headers || {};
        config.headers.Cookie = `zuid=${cookie.zuid}`;
        config.withCredentials = true;
    }
    return client._sendRequest(config);
};
exports.sendRequestWithCookie = sendRequestWithCookie;
//# sourceMappingURL=cookie.js.map