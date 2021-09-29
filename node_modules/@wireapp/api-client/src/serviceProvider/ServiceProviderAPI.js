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
exports.ServiceProviderAPI = void 0;
class ServiceProviderAPI {
    constructor(client) {
        this.client = client;
    }
    async deleteServiceProvider(data) {
        const config = {
            data,
            method: 'delete',
            url: `${ServiceProviderAPI.URL.PROVIDER}`,
        };
        await this.client.sendJSON(config);
    }
    async getServiceProvider() {
        const config = {
            method: 'get',
            url: `${ServiceProviderAPI.URL.PROVIDER}`,
        };
        const response = await this.client.sendJSON(config);
        return response.data;
    }
    async postLoginServiceProvider(data) {
        const config = {
            data,
            method: 'post',
            url: `${ServiceProviderAPI.URL.PROVIDER}/${ServiceProviderAPI.URL.LOGIN}`,
        };
        const response = await this.client.sendJSON(config);
        return response.data;
    }
    async postPasswordReset(data) {
        const config = {
            data,
            method: 'post',
            url: `${ServiceProviderAPI.URL.PROVIDER}/${ServiceProviderAPI.URL.PASSWORD_RESET}`,
        };
        await this.client.sendJSON(config);
    }
    async postPasswordResetComplete(data) {
        const config = {
            data,
            method: 'post',
            url: `${ServiceProviderAPI.URL.PROVIDER}/${ServiceProviderAPI.URL.PASSWORD_RESET}/${ServiceProviderAPI.URL.COMPLETE}`,
        };
        await this.client.sendJSON(config);
    }
    async postRegisterServiceProvider(data) {
        const config = {
            data,
            method: 'post',
            url: `${ServiceProviderAPI.URL.PROVIDER}/${ServiceProviderAPI.URL.REGISTER}`,
        };
        const response = await this.client.sendJSON(config);
        return response.data;
    }
    async putProvider(data) {
        const config = {
            data,
            method: 'put',
            url: `${ServiceProviderAPI.URL.PROVIDER}`,
        };
        await this.client.sendJSON(config);
    }
}
exports.ServiceProviderAPI = ServiceProviderAPI;
ServiceProviderAPI.URL = {
    COMPLETE: 'complete',
    LOGIN: 'login',
    PASSWORD_RESET: 'password-reset',
    PROVIDER: '/provider',
    REGISTER: 'register',
};
//# sourceMappingURL=ServiceProviderAPI.js.map