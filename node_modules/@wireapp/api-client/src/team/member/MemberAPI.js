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
exports.MemberAPI = void 0;
const axios_1 = __importDefault(require("axios"));
const commons_1 = require("@wireapp/commons");
const TeamAPI_1 = require("../team/TeamAPI");
const http_1 = require("../../http/");
const user_1 = require("../../user");
class MemberAPI {
    constructor(client) {
        this.client = client;
    }
    async getMember(teamId, userId) {
        const config = {
            method: 'get',
            url: `${TeamAPI_1.TeamAPI.URL.TEAMS}/${teamId}/${MemberAPI.URL.MEMBERS}/${userId}`,
        };
        const response = await this.client.sendJSON(config);
        return response.data;
    }
    async deleteMember(teamId, userId, password) {
        const config = {
            data: {
                password,
            },
            method: 'delete',
            url: `${TeamAPI_1.TeamAPI.URL.TEAMS}/${teamId}/${MemberAPI.URL.MEMBERS}/${userId}`,
        };
        await this.client.sendJSON(config);
    }
    async postMembers(teamId, member) {
        const config = {
            data: {
                member: member,
            },
            method: 'post',
            url: `${TeamAPI_1.TeamAPI.URL.TEAMS}/${teamId}/${MemberAPI.URL.MEMBERS}`,
        };
        await this.client.sendJSON(config);
    }
    async putMembers(teamId, member) {
        const config = {
            data: {
                member: member,
            },
            method: 'put',
            url: `${TeamAPI_1.TeamAPI.URL.TEAMS}/${teamId}/${MemberAPI.URL.MEMBERS}`,
        };
        await this.client.sendJSON(config);
    }
    /**
     * This endpoint returns all members of the a team unless it's a large team (>2000 team member).
     * If the queried team is a large team the `hasMore` flag will switch to `true`.
     */
    async getAllMembers(teamId) {
        const config = {
            method: 'get',
            url: `${TeamAPI_1.TeamAPI.URL.TEAMS}/${teamId}/${MemberAPI.URL.MEMBERS}`,
        };
        const response = await this.client.sendJSON(config);
        return response.data;
    }
    async getMembers(teamId, parameters, limit = MemberAPI.DEFAULT_MEMBERS_CHUNK_SIZE) {
        const { ids } = parameters;
        if (ids.length) {
            const uniqueIds = commons_1.ArrayUtil.removeDuplicates(ids);
            const idChunks = commons_1.ArrayUtil.chunk(uniqueIds, limit);
            const resolvedTasks = await Promise.all(idChunks.map(async (idChunk) => {
                const result = await this._getMembers(teamId, { ids: idChunk });
                return result.members;
            }));
            return commons_1.ArrayUtil.flatten(resolvedTasks);
        }
        return [];
    }
    async _getMembers(teamId, parameters) {
        const config = {
            data: { user_ids: parameters.ids },
            method: 'post',
            url: `${TeamAPI_1.TeamAPI.URL.TEAMS}/${teamId}/${MemberAPI.URL.MEMBERS_BY_ID_LIST}`,
        };
        const response = await this.client.sendJSON(config);
        return response.data;
    }
    async getMemberListCSV(teamId, progressCallback) {
        const cancelSource = axios_1.default.CancelToken.source();
        const config = {
            cancelToken: cancelSource.token,
            method: 'get',
            onDownloadProgress: (0, http_1.handleProgressEvent)(progressCallback),
            responseType: 'arraybuffer',
            url: `${TeamAPI_1.TeamAPI.URL.TEAMS}/${teamId}/${MemberAPI.URL.MEMBERS}/${MemberAPI.URL.CSV}`,
        };
        const handleRequest = async () => {
            try {
                const response = await this.client.sendRequest(config, true);
                return {
                    buffer: response.data,
                    mimeType: response.headers['content-type'],
                };
            }
            catch (error) {
                if (error.message === http_1.SyntheticErrorLabel.REQUEST_CANCELLED) {
                    throw new user_1.RequestCancellationError('Member CSV download got cancelled.');
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
exports.MemberAPI = MemberAPI;
// Maximum 1600 due to "413 Request Entity Too Large" response
MemberAPI.DEFAULT_MEMBERS_CHUNK_SIZE = 1600;
MemberAPI.URL = {
    MEMBERS: 'members',
    CSV: 'csv',
    MEMBERS_BY_ID_LIST: 'get-members-by-ids-using-post',
};
//# sourceMappingURL=MemberAPI.js.map