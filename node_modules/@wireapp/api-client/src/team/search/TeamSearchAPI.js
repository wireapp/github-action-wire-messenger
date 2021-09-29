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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamSearchAPI = void 0;
const axios_1 = __importDefault(require("axios"));
const http_1 = require("../../http");
const user_1 = require("../../user");
const team_1 = require("../team");
class TeamSearchAPI {
    constructor(client) {
        this.client = client;
    }
    /**
     * Search for team members.
     * @param query The search query
     * @param options Search options (sort, order, filter, etc.)
     */
    async getSearchMembers(teamId, query, options = {}) {
        var _a;
        const cancelSource = axios_1.default.CancelToken.source();
        const config = {
            cancelToken: cancelSource.token,
            method: 'get',
            params: Object.assign(Object.assign({ q: query }, options), { frole: (_a = options.frole) === null || _a === void 0 ? void 0 : _a.join(',') }),
            url: `${team_1.TeamAPI.URL.TEAMS}/${teamId}/${TeamSearchAPI.URL.SEARCH}`,
        };
        const handleRequest = async () => {
            try {
                const response = await this.client.sendJSON(config);
                return response.data;
            }
            catch (error) {
                if (error.message === http_1.SyntheticErrorLabel.REQUEST_CANCELLED) {
                    throw new user_1.RequestCancellationError('Search request got cancelled');
                }
                throw error;
            }
        };
        return {
            cancel: () => cancelSource.cancel(http_1.SyntheticErrorLabel.REQUEST_CANCELLED),
            response: handleRequest(),
        };
    }
}
exports.TeamSearchAPI = TeamSearchAPI;
TeamSearchAPI.URL = {
    SEARCH: 'search',
};
//# sourceMappingURL=TeamSearchAPI.js.map