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
exports.TeamConversationAPI = void 0;
class TeamConversationAPI {
    constructor(client) {
        this.client = client;
    }
    /**
     * Remove a team conversation.
     * @param teamId ID of the team to remove the conversation from
     * @param conversationId ID of the conversation to remove
     * @see https://staging-nginz-https.zinfra.io/swagger-ui/tab.html#!//deleteTeamConversation
     */
    async deleteConversation(teamId, conversationId) {
        const config = {
            method: 'delete',
            url: `${TeamConversationAPI.URL.TEAMS}/${teamId}/${TeamConversationAPI.URL.CONVERSATIONS}/${conversationId}`,
        };
        await this.client.sendJSON(config);
    }
    /**
     * Get one team conversation.
     * @param teamId ID of the team to get the conversation from
     * @param conversationId ID of the conversation to get
     * @see https://staging-nginz-https.zinfra.io/swagger-ui/tab.html#!//getTeamConversation
     */
    async getConversation(teamId, conversationId) {
        const config = {
            method: 'get',
            url: `${TeamConversationAPI.URL.TEAMS}/${teamId}/${TeamConversationAPI.URL.CONVERSATIONS}/${conversationId}`,
        };
        const response = await this.client.sendJSON(config);
        return response.data;
    }
    /**
     * Get team conversations.
     * @param teamId ID of the team to get conversations for
     * @see https://staging-nginz-https.zinfra.io/swagger-ui/tab.html#!//getTeamConversations
     */
    async getConversations(teamId) {
        const config = {
            method: 'get',
            url: `${TeamConversationAPI.URL.TEAMS}/${teamId}/${TeamConversationAPI.URL.CONVERSATIONS}`,
        };
        const response = await this.client.sendJSON(config);
        return response.data;
    }
    /**
     * Get existing roles available for the given team.
     * @param teamId ID of the team to get the roles for
     * @see https://staging-nginz-https.zinfra.io/swagger-ui/tab.html#!//getTeamConversationsRoles
     */
    async getRoles(teamId) {
        const config = {
            method: 'get',
            url: `${TeamConversationAPI.URL.TEAMS}/${teamId}/${TeamConversationAPI.URL.CONVERSATIONS}/${TeamConversationAPI.URL.ROLES}`,
        };
        const response = await this.client.sendJSON(config);
        return response.data;
    }
}
exports.TeamConversationAPI = TeamConversationAPI;
TeamConversationAPI.URL = {
    CONVERSATIONS: 'conversations',
    ROLES: 'roles',
    TEAMS: '/teams',
};
//# sourceMappingURL=TeamConversationAPI.js.map