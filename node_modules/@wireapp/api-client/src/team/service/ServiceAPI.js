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
exports.ServiceAPI = void 0;
class ServiceAPI {
    constructor(client) {
        this.client = client;
    }
    async getServices(limit = 100, start, tags) {
        const config = {
            method: 'get',
            params: {
                size: limit,
                start,
                tags,
            },
            url: `/${ServiceAPI.URL.SERVICES}`,
        };
        const response = await this.client.sendJSON(config);
        return response.data;
    }
    async getTeamServices(teamId, limit = 100) {
        const config = {
            method: 'get',
            params: {
                prefix: undefined,
                size: limit,
                start: undefined,
            },
            url: `${ServiceAPI.URL.TEAMS}/${teamId}/${ServiceAPI.URL.SERVICES}/${ServiceAPI.URL.WHITELISTED}`,
        };
        const response = await this.client.sendJSON(config);
        return response.data;
    }
    async getProvider(providerId) {
        const config = {
            method: 'get',
            url: `${ServiceAPI.URL.PROVIDERS}/${providerId}`,
        };
        const response = await this.client.sendJSON(config);
        return response.data;
    }
    async getProviderServices(providerId) {
        const config = {
            method: 'get',
            url: `${ServiceAPI.URL.PROVIDERS}/${providerId}/${ServiceAPI.URL.SERVICES}`,
        };
        const response = await this.client.sendJSON(config);
        return response.data;
    }
    async getService(providerId, serviceId) {
        const config = {
            method: 'get',
            url: `${ServiceAPI.URL.PROVIDERS}/${providerId}/${ServiceAPI.URL.SERVICES}/${serviceId}`,
        };
        const response = await this.client.sendJSON(config);
        return response.data;
    }
    async postServiceWhitelist(teamId, whitelistData) {
        const config = {
            data: whitelistData,
            method: 'post',
            url: `${ServiceAPI.URL.TEAMS}/${teamId}/${ServiceAPI.URL.SERVICES}/${ServiceAPI.URL.WHITELIST}`,
        };
        const response = await this.client.sendJSON(config);
        return response.data;
    }
}
exports.ServiceAPI = ServiceAPI;
ServiceAPI.URL = {
    PROVIDERS: '/providers',
    SERVICES: 'services',
    TEAMS: '/teams',
    WHITELIST: 'whitelist',
    WHITELISTED: 'whitelisted',
};
//# sourceMappingURL=ServiceAPI.js.map