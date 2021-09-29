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
exports.ServicesAPI = void 0;
const asset_1 = require("../asset");
class ServicesAPI {
    constructor(client) {
        this.client = client;
        this.assetAPI = new asset_1.AssetAPI(this.client);
    }
    /**
     * Delete the service, thereby removing it from the conversation it is in.
     *
     * The service will receive a final `conversation.member-leave` message.
     */
    async deleteSelf() {
        const config = {
            method: 'delete',
            url: `${ServicesAPI.URL.BOT}/${ServicesAPI.URL.SELF}`,
        };
        await this.client.sendJSON(config);
    }
    /**
     * Fetch the service's own client information
     */
    async getClient() {
        const config = {
            method: 'get',
            url: `${ServicesAPI.URL.BOT}/${ServicesAPI.URL.CLIENT}`,
        };
        const response = await this.client.sendJSON(config);
        return response.data;
    }
    /**
     * List the service's remaining prekey IDs.
     */
    async getClientPreKeys() {
        const config = {
            method: 'get',
            url: `${ServicesAPI.URL.BOT}/${ServicesAPI.URL.CLIENT}/${ServicesAPI.URL.PREKEYS}`,
        };
        const response = await this.client.sendJSON(config);
        return response.data;
    }
    /**
     * Fetch a user's list of clients.
     */
    async getClientsByUserId(userId) {
        const config = {
            method: 'get',
            url: `${ServicesAPI.URL.BOT}/${ServicesAPI.URL.USERS}/${userId}${ServicesAPI.URL.CLIENTS}`,
        };
        const response = await this.client.sendJSON(config);
        return response.data;
    }
    /**
     * Fetch a user's list of clients.
     */
    async getConversation(userId) {
        const config = {
            method: 'get',
            url: `${ServicesAPI.URL.BOT}/${ServicesAPI.URL.USERS}/${userId}${ServicesAPI.URL.CLIENTS}`,
        };
        const response = await this.client.sendJSON(config);
        return response.data;
    }
    /**
     * Fetch the service's own user profile information.
     */
    async getSelf() {
        const config = {
            method: 'get',
            url: `${ServicesAPI.URL.BOT}/${ServicesAPI.URL.SELF}`,
        };
        const response = await this.client.sendJSON(config);
        return response.data;
    }
    /**
     * Claim prekeys from one or more clients of one or more users.
     *
     * The result is a nested JSON object structure where the first-level keys
     * are user IDs and the second-level keys client IDs. The values paired with
     * the client IDs are the base64-encoded prekeys.
     */
    async postUserPreKeysList(userPreKeyList) {
        const config = {
            data: userPreKeyList,
            method: 'post',
            url: `${ServicesAPI.URL.BOT}/${ServicesAPI.URL.CLIENT}/${ServicesAPI.URL.PREKEYS}`,
        };
        const response = await this.client.sendJSON(config);
        return response.data;
    }
    /**
     * Fetch other user's profiles.
     */
    async getUsers(ids) {
        const config = {
            method: 'get',
            params: {
                ids,
            },
            url: `${ServicesAPI.URL.BOT}/${ServicesAPI.URL.USERS}`,
        };
        const response = await this.client.sendJSON(config);
        return response.data;
    }
    /**
     * List the service's remaining prekey IDs.
     */
    async postClientPreKeys(preKeys) {
        const config = {
            data: { prekeys: preKeys },
            method: 'post',
            url: `${ServicesAPI.URL.BOT}/${ServicesAPI.URL.CLIENT}/${ServicesAPI.URL.PREKEYS}`,
        };
        await this.client.sendJSON(config);
    }
    /**
     * Upload an asset.
     * Note that resumable uploads are not currently supported for services.
     */
    postAsset(asset, options, progressCallback) {
        return this.assetAPI.postServiceAsset(asset, options, progressCallback);
    }
    /**
     * Download an asset.
     */
    getAsset(assetId, token, forceCaching = false, progressCallback) {
        return this.assetAPI.getServiceAsset(assetId, token, forceCaching, progressCallback);
    }
    /**
     * Delete an asset.
     */
    async deleteAsset(assetId) {
        const config = {
            method: 'delete',
            url: `${ServicesAPI.URL.BOT}/${ServicesAPI.URL.ASSETS}/${assetId}`,
        };
        await this.client.sendJSON(config);
    }
    /**
     * Post an end-to-end encrypted generic message to the conversation the service is in.
     */
    async postMessage(messageData) {
        const config = {
            data: messageData,
            method: 'post',
            url: `${ServicesAPI.URL.BOT}/${ServicesAPI.URL.MESSAGES}`,
        };
        await this.client.sendJSON(config);
    }
}
exports.ServicesAPI = ServicesAPI;
ServicesAPI.URL = {
    ASSETS: 'assets',
    BOT: '/bot',
    CLIENT: 'client',
    CLIENTS: 'clients',
    CONVERSATION: 'conversation',
    MESSAGES: 'messages',
    PREKEYS: 'prekeys',
    SELF: 'self',
    USERS: 'users',
};
//# sourceMappingURL=ServicesAPI.js.map