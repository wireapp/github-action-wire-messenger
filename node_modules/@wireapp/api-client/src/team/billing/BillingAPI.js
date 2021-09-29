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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingAPI = void 0;
class BillingAPI {
    constructor(client) {
        this.client = client;
    }
    async getBillingTeam(teamId) {
        const config = {
            method: 'get',
            url: `${BillingAPI.URL.TEAMS}/${teamId}/${BillingAPI.URL.BILLING}/${BillingAPI.URL.TEAM}`,
        };
        const response = await this.client.sendJSON(config);
        return response.data;
    }
    async putBillingInfo(teamId, billingInfo) {
        const config = {
            data: billingInfo,
            method: 'put',
            url: `${BillingAPI.URL.TEAMS}/${teamId}/${BillingAPI.URL.BILLING}/${BillingAPI.URL.INFO}`,
        };
        const response = await this.client.sendJSON(config);
        return response.data;
    }
    async getBillingInfo(teamId) {
        const config = {
            method: 'get',
            url: `${BillingAPI.URL.TEAMS}/${teamId}/${BillingAPI.URL.BILLING}/${BillingAPI.URL.INFO}`,
        };
        const response = await this.client.sendJSON(config);
        return response.data;
    }
    async putCard(teamId, stripeToken) {
        const config = {
            data: {
                stripeToken,
            },
            method: 'put',
            url: `${BillingAPI.URL.TEAMS}/${teamId}/${BillingAPI.URL.BILLING}/${BillingAPI.URL.CARD}`,
        };
        const response = await this.client.sendJSON(config);
        return response.data;
    }
    async getCard(teamId) {
        const config = {
            method: 'get',
            url: `${BillingAPI.URL.TEAMS}/${teamId}/${BillingAPI.URL.BILLING}/${BillingAPI.URL.CARD}`,
        };
        const response = await this.client.sendJSON(config);
        return response.data;
    }
    async postCoupon(teamId, coupon) {
        const config = {
            data: {
                coupon,
            },
            method: 'post',
            url: `${BillingAPI.URL.TEAMS}/${teamId}/${BillingAPI.URL.BILLING}/${BillingAPI.URL.COUPON}`,
        };
        const response = await this.client.sendJSON(config);
        return response.data;
    }
    async deleteCoupon(teamId, coupon) {
        const config = {
            data: {
                coupon,
            },
            method: 'delete',
            url: `${BillingAPI.URL.TEAMS}/${teamId}/${BillingAPI.URL.BILLING}/${BillingAPI.URL.COUPON}`,
        };
        await this.client.sendJSON(config);
    }
    async getCurrentPlan(teamId) {
        const config = {
            method: 'get',
            url: `${BillingAPI.URL.TEAMS}/${teamId}/${BillingAPI.URL.BILLING}/${BillingAPI.URL.PLAN}`,
        };
        const response = await this.client.sendJSON(config);
        return response.data;
    }
    async putPlan(teamId, planId) {
        const config = {
            data: { planId },
            method: 'put',
            url: `${BillingAPI.URL.TEAMS}/${teamId}/${BillingAPI.URL.BILLING}/${BillingAPI.URL.PLAN}`,
        };
        const response = await this.client.sendJSON(config);
        return response.data;
    }
    async getAvailablePlans(teamId, filter) {
        const config = {
            params: filter,
            method: 'get',
            url: `${BillingAPI.URL.TEAMS}/${teamId}/${BillingAPI.URL.BILLING}/${BillingAPI.URL.PLAN}/${BillingAPI.URL.LIST}`,
        };
        const response = await this.client.sendJSON(config);
        return response.data;
    }
    async getSupportedCurrencies(teamId) {
        const config = {
            method: 'get',
            url: `${BillingAPI.URL.TEAMS}/${teamId}/${BillingAPI.URL.BILLING}/${BillingAPI.URL.CURRENCIES}`,
        };
        const response = await this.client.sendJSON(config);
        return response.data;
    }
    async getUpcomingInvoice(teamId) {
        const config = {
            method: 'get',
            url: `${BillingAPI.URL.TEAMS}/${teamId}/${BillingAPI.URL.BILLING}/${BillingAPI.URL.INVOICES}/${BillingAPI.URL.UPCOMING}`,
        };
        const response = await this.client.sendJSON(config);
        return response.data;
    }
    async getInvoices(teamId, limit = BillingAPI.DEFAULT_INVOICES_CHUNK_SIZE, startAfterInvoiceId) {
        const config = {
            method: 'get',
            params: {
                size: limit,
                start: startAfterInvoiceId,
            },
            url: `${BillingAPI.URL.TEAMS}/${teamId}/${BillingAPI.URL.BILLING}/${BillingAPI.URL.INVOICES}`,
        };
        const response = await this.client.sendJSON(config);
        return response.data;
    }
}
exports.BillingAPI = BillingAPI;
BillingAPI.DEFAULT_INVOICES_CHUNK_SIZE = 10;
BillingAPI.URL = {
    BILLING: 'billing',
    CURRENCIES: 'currencies',
    INFO: 'info',
    CARD: 'card',
    COUPON: 'coupon',
    INVOICES: 'invoices',
    PLAN: 'plan',
    LIST: 'list',
    TEAMS: '/teams',
    TEAM: 'team',
    UPCOMING: 'upcoming',
};
//# sourceMappingURL=BillingAPI.js.map