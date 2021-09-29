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
exports.GiphyAPI = void 0;
class GiphyAPI {
    constructor(client) {
        this.client = client;
    }
    /**
     * Get multiple Giphy images by IDs.
     * @see https://developers.giphy.com/docs/api/endpoint#get-gifs-by-id
     */
    async getGiphyByIds(options) {
        const allIds = options.ids.join(',');
        const optionsWithoutIds = { random_id: options.random_id, rating: options.rating };
        const config = {
            method: 'get',
            params: optionsWithoutIds,
            url: `${GiphyAPI.URL.PROXY}/${GiphyAPI.URL.GIPHY}/${allIds}`,
        };
        const response = await this.client.sendJSON(config);
        return response.data;
    }
    /**
     * Get a Giphy image by its ID.
     * @see https://developers.giphy.com/docs/api/endpoint#get-gif-by-id
     */
    async getGiphyById(id) {
        const config = {
            method: 'get',
            url: `${GiphyAPI.URL.PROXY}/${GiphyAPI.URL.GIPHY}/${id}`,
        };
        const response = await this.client.sendJSON(config);
        return response.data;
    }
    /**
     * Get a random GIF from Giphy.
     * @see https://developers.giphy.com/docs/api/endpoint#random
     */
    async getGiphyRandom(options) {
        const config = {
            method: 'get',
            params: options,
            url: `${GiphyAPI.URL.PROXY}/${GiphyAPI.URL.GIPHY}/${GiphyAPI.URL.RANDOM}`,
        };
        const response = await this.client.sendJSON(config);
        return response.data;
    }
    /**
     * Get GIF search results from Giphy.
     * @see https://developers.giphy.com/docs/api/endpoint#search
     */
    async getGiphySearch(options) {
        const config = {
            method: 'get',
            params: options,
            url: `${GiphyAPI.URL.PROXY}/${GiphyAPI.URL.GIPHY}/${GiphyAPI.URL.SEARCH}`,
        };
        const response = await this.client.sendJSON(config);
        return response.data;
    }
    /**
     * Get GIF trending results from Giphy.
     * @see https://developers.giphy.com/docs/api/endpoint#trending
     */
    async getGiphyTrending(options) {
        const config = {
            method: 'get',
            params: options,
            url: `${GiphyAPI.URL.PROXY}/${GiphyAPI.URL.GIPHY}/${GiphyAPI.URL.TRENDING}`,
        };
        const response = await this.client.sendJSON(config);
        return response.data;
    }
}
exports.GiphyAPI = GiphyAPI;
GiphyAPI.URL = {
    GIPHY: 'giphy/v1/gifs',
    PROXY: '/proxy',
    RANDOM: 'random',
    SEARCH: 'search',
    TRENDING: 'trending',
};
//# sourceMappingURL=GiphyAPI.js.map