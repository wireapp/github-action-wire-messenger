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
exports.ClientAPI = void 0;
const ClientError_1 = require("./ClientError");
const http_1 = require("../http/");
class ClientAPI {
    constructor(client) {
        this.client = client;
    }
    async postClient(newClient) {
        const config = {
            data: newClient,
            method: 'post',
            url: ClientAPI.URL.CLIENTS,
        };
        const response = await this.client.sendJSON(config);
        return response.data;
    }
    async putClient(clientId, updatedClient) {
        const config = {
            data: updatedClient,
            method: 'put',
            url: `${ClientAPI.URL.CLIENTS}/${clientId}`,
        };
        try {
            await this.client.sendJSON(config);
        }
        catch (error) {
            switch (error.label) {
                case http_1.BackendErrorLabel.CLIENT_CAPABILITY_REMOVED: {
                    throw new ClientError_1.ClientCapabilityRemovedError(error.message);
                }
            }
            throw error;
        }
    }
    async getClientCapabilities(clientId) {
        const config = {
            method: 'get',
            url: `${ClientAPI.URL.CLIENTS}/${clientId}/${ClientAPI.URL.CAPABILITIES}`,
        };
        const response = await this.client.sendJSON(config);
        return response.data;
    }
    async deleteClient(clientId, password) {
        const config = {
            data: {
                password,
            },
            method: 'delete',
            url: `${ClientAPI.URL.CLIENTS}/${clientId}`,
        };
        await this.client.sendJSON(config);
    }
    async getClient(clientId) {
        const config = {
            method: 'get',
            url: `${ClientAPI.URL.CLIENTS}/${clientId}`,
        };
        const response = await this.client.sendJSON(config);
        return response.data;
    }
    async getClients() {
        const config = {
            method: 'get',
            url: ClientAPI.URL.CLIENTS,
        };
        const response = await this.client.sendJSON(config);
        return response.data;
    }
    async getClientPreKeys(clientId) {
        const config = {
            method: 'get',
            url: `${ClientAPI.URL.CLIENTS}/${clientId}/${ClientAPI.URL.PREKEYS}`,
        };
        const response = await this.client.sendJSON(config, true);
        return response.data;
    }
}
exports.ClientAPI = ClientAPI;
ClientAPI.URL = {
    CLIENTS: '/clients',
    CAPABILITIES: 'capabilities',
    PREKEYS: 'prekeys',
};
//# sourceMappingURL=ClientAPI.js.map