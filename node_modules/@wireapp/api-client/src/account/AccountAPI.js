"use strict";
/*
 * Wire
 * Copyright (C) 2019 Wire Swiss GmbH
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
exports.AccountAPI = void 0;
const AccountError_1 = require("./AccountError");
const http_1 = require("../http");
class AccountAPI {
    constructor(client) {
        this.client = client;
    }
    /**
     * Delete account
     * @see https://staging-nginz-https.zinfra.io/swagger-ui/#!/delete
     */
    async postDeleteAccount(key, code) {
        const config = {
            data: {
                code,
                key,
            },
            method: 'post',
            url: AccountAPI.URL.DELETE,
        };
        await this.client.sendJSON(config);
    }
    /**
     * Start password reset flow
     * @see https://staging-nginz-https.zinfra.io/swagger-ui/#!/password-reset
     */
    async postPasswordReset(email) {
        const config = {
            data: {
                email,
            },
            method: 'post',
            url: AccountAPI.URL.PASSWORD_RESET,
        };
        await this.client.sendJSON(config);
    }
    /**
     * Start bot password reset flow
     * @see https://staging-nginz-https.zinfra.io/swagger-ui/#!/provider/password-reset
     */
    async postBotPasswordReset(email) {
        const config = {
            data: {
                email,
            },
            method: 'post',
            url: `${AccountAPI.URL.PROVIDER}${AccountAPI.URL.PASSWORD_RESET}`,
        };
        await this.client.sendJSON(config);
    }
    /**
     * Finish password reset flow
     * @see https://staging-nginz-https.zinfra.io/swagger-ui/#!/password-reset/complete
     */
    async postPasswordResetComplete(password, key, code) {
        const config = {
            data: {
                code,
                key,
                password,
            },
            method: 'post',
            url: `${AccountAPI.URL.PASSWORD_RESET}/${AccountAPI.URL.PASSWORD_RESET_COMPLETE}`,
        };
        await this.client.sendJSON(config);
    }
    /**
     * Finish bot password reset flow
     * @see https://staging-nginz-https.zinfra.io/swagger-ui/#!/provider/password-reset/complete
     */
    async postBotPasswordResetComplete(password, key, code) {
        const config = {
            data: {
                code,
                key,
                password,
            },
            method: 'post',
            url: `${AccountAPI.URL.PROVIDER}${AccountAPI.URL.PASSWORD_RESET}/${AccountAPI.URL.PASSWORD_RESET_COMPLETE}`,
        };
        await this.client.sendJSON(config);
    }
    /**
     * Verify email address
     * @see https://staging-nginz-https.zinfra.io/swagger-ui/#!/activate
     */
    async getVerifyEmail(key, code) {
        const config = {
            method: 'get',
            params: {
                code,
                key,
            },
            url: AccountAPI.URL.ACTIVATE,
        };
        await this.client.sendJSON(config);
    }
    /**
     * Verify service
     * @see https://staging-nginz-https.zinfra.io/swagger-ui/#!/provider/activate
     */
    async getVerifyBot(key, code) {
        const config = {
            method: 'get',
            params: {
                code,
                key,
            },
            url: `${AccountAPI.URL.PROVIDER}${AccountAPI.URL.ACTIVATE}`,
        };
        await this.client.sendJSON(config);
    }
    async getDomain(domain) {
        const config = {
            method: 'get',
            url: `${AccountAPI.URL.CUSTOM_BACKEND}/${AccountAPI.URL.BY_DOMAIN}/${domain}`,
        };
        try {
            const response = await this.client.sendJSON(config);
            return response.data;
        }
        catch (error) {
            const backendError = error;
            switch (backendError.label) {
                case http_1.BackendErrorLabel.CUSTOM_BACKEND_NOT_FOUND: {
                    throw new AccountError_1.CustomBackendNotFoundError(backendError.message);
                }
            }
            throw error;
        }
    }
    async getSSOSettings() {
        const config = {
            method: 'get',
            url: `${AccountAPI.URL.SSO}/${AccountAPI.URL.SETTINGS}`,
        };
        const response = await this.client.sendJSON(config);
        return response.data;
    }
    /**
     * Retrieve all TURN server addresses and credentials.
     * Clients are expected to do a DNS lookup to resolve the IP addresses of the given hostnames
     *
     * @param limit Limits the number of ICE-Candidates returned. [1..10]
     */
    async getCallConfig(limit) {
        const config = {
            method: 'get',
            params: {
                limit,
            },
            url: `${AccountAPI.URL.CALLS}/${AccountAPI.URL.CALLS_CONFIG}/${AccountAPI.URL.CALLS_CONFIG_V2}`,
        };
        const response = await this.client.sendJSON(config);
        return response.data;
    }
    async getConfig() {
        const config = {
            method: 'get',
            url: `${AccountAPI.URL.BACKEND_CONFIG}`,
        };
        const response = await this.client.sendJSON(config);
        return response.data;
    }
}
exports.AccountAPI = AccountAPI;
AccountAPI.URL = {
    ACTIVATE: '/activate',
    BACKEND_CONFIG: '/config.json',
    BY_DOMAIN: 'by-domain',
    CALLS: '/calls',
    CALLS_CONFIG: 'config',
    CALLS_CONFIG_V2: 'v2',
    CUSTOM_BACKEND: '/custom-backend',
    DELETE: '/delete',
    PASSWORD_RESET: '/password-reset',
    PASSWORD_RESET_COMPLETE: 'complete',
    PROVIDER: '/provider',
    SETTINGS: 'settings',
    SSO: '/sso',
};
//# sourceMappingURL=AccountAPI.js.map