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
exports.LegalHoldAPI = void 0;
const TeamAPI_1 = require("../team/TeamAPI");
class LegalHoldAPI {
    constructor(client) {
        this.client = client;
    }
    async getMemberLegalHold(teamId, userId) {
        const config = {
            method: 'get',
            url: `${TeamAPI_1.TeamAPI.URL.TEAMS}/${teamId}/${LegalHoldAPI.URL.LEGAL_HOLD}/${userId}`,
        };
        const response = await this.client.sendJSON(config);
        return response.data;
    }
    async deleteMemberLegalHold(teamId, userId, password) {
        const config = {
            data: {
                password,
            },
            method: 'delete',
            url: `${TeamAPI_1.TeamAPI.URL.TEAMS}/${teamId}/${LegalHoldAPI.URL.LEGAL_HOLD}/${userId}`,
        };
        await this.client.sendJSON(config);
    }
    async postMemberLegalHold(teamId, userId) {
        const config = {
            method: 'post',
            url: `${TeamAPI_1.TeamAPI.URL.TEAMS}/${teamId}/${LegalHoldAPI.URL.LEGAL_HOLD}/${userId}`,
        };
        await this.client.sendJSON(config);
    }
    async putMemberApproveLegalHold(teamId, userId, password) {
        const config = {
            data: {
                password,
            },
            method: 'put',
            url: `${TeamAPI_1.TeamAPI.URL.TEAMS}/${teamId}/${LegalHoldAPI.URL.LEGAL_HOLD}/${userId}/${LegalHoldAPI.URL.APPROVE_LEGAL_HOLD}`,
        };
        await this.client.sendJSON(config);
    }
    async getSettings(teamId) {
        const config = {
            method: 'get',
            url: `${TeamAPI_1.TeamAPI.URL.TEAMS}/${teamId}/${LegalHoldAPI.URL.LEGAL_HOLD}/${LegalHoldAPI.URL.SETTINGS_LEGAL_HOLD}`,
        };
        const response = await this.client.sendJSON(config);
        return response.data;
    }
    async deleteSettings(teamId, password) {
        const config = {
            data: {
                password,
            },
            method: 'delete',
            url: `${TeamAPI_1.TeamAPI.URL.TEAMS}/${teamId}/${LegalHoldAPI.URL.LEGAL_HOLD}/${LegalHoldAPI.URL.SETTINGS_LEGAL_HOLD}`,
        };
        await this.client.sendJSON(config);
    }
    async postSettings(teamId, legalHoldData) {
        const config = {
            data: legalHoldData,
            method: 'post',
            url: `${TeamAPI_1.TeamAPI.URL.TEAMS}/${teamId}/${LegalHoldAPI.URL.LEGAL_HOLD}/${LegalHoldAPI.URL.SETTINGS_LEGAL_HOLD}`,
        };
        const response = await this.client.sendJSON(config);
        return response.data;
    }
}
exports.LegalHoldAPI = LegalHoldAPI;
LegalHoldAPI.URL = {
    APPROVE_LEGAL_HOLD: 'approve',
    LEGAL_HOLD: 'legalhold',
    SETTINGS_LEGAL_HOLD: 'settings',
};
//# sourceMappingURL=LegalHoldAPI.js.map