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
exports.PaymentAPI = void 0;
class PaymentAPI {
    constructor(client) {
        this.client = client;
    }
    /**
     * @deprecated Use BillingAPI
     */
    async putPaymentData(teamId, paymentData) {
        const config = {
            data: paymentData,
            method: 'put',
            url: `${PaymentAPI.URL.TEAMS}/${teamId}/${PaymentAPI.URL.BILLING}`,
        };
        const response = await this.client.sendJSON(config);
        return response.data;
    }
    /**
     * @deprecated Use BillingAPI
     */
    async getPaymentData(teamId) {
        const config = {
            method: 'get',
            url: `${PaymentAPI.URL.TEAMS}/${teamId}/${PaymentAPI.URL.BILLING}`,
        };
        const response = await this.client.sendJSON(config);
        return response.data;
    }
    /**
     * @deprecated Use BillingAPI
     */
    async deletePaymentData(teamId, paymentData) {
        const config = {
            data: paymentData,
            method: 'delete',
            url: `${PaymentAPI.URL.TEAMS}/${teamId}/${PaymentAPI.URL.BILLING}`,
        };
        const response = await this.client.sendJSON(config);
        return response.data;
    }
    /**
     * @deprecated Use BillingAPI
     */
    async putPaymentBilling(teamId, billingInfo) {
        const config = {
            data: billingInfo,
            method: 'put',
            url: `${PaymentAPI.URL.TEAMS}/${teamId}/${PaymentAPI.URL.BILLING}/${PaymentAPI.URL.INFO}`,
        };
        const response = await this.client.sendJSON(config);
        return response.data;
    }
    /**
     * @deprecated Use BillingAPI
     */
    async getPaymentBilling(teamId) {
        const config = {
            method: 'get',
            url: `${PaymentAPI.URL.TEAMS}/${teamId}/${PaymentAPI.URL.BILLING}/${PaymentAPI.URL.INFO}`,
        };
        const response = await this.client.sendJSON(config);
        return response.data;
    }
    /**
     * @deprecated Use BillingAPI
     */
    async putPaymentPlan(teamId, plan) {
        const config = {
            data: plan,
            method: 'put',
            url: `${PaymentAPI.URL.TEAMS}/${teamId}/${PaymentAPI.URL.BILLING}/${PaymentAPI.URL.PLAN}/${plan.id}`,
        };
        await this.client.sendJSON(config);
    }
    /**
     * @deprecated Use BillingAPI
     */
    async getPlans(teamId) {
        const config = {
            method: 'get',
            url: `${PaymentAPI.URL.TEAMS}/${teamId}/${PaymentAPI.URL.BILLING}/${PaymentAPI.URL.PLANS}`,
        };
        const response = await this.client.sendJSON(config);
        return response.data;
    }
    /**
     * @deprecated
     */
    async getCharges(teamId) {
        const config = {
            method: 'get',
            url: `${PaymentAPI.URL.TEAMS}/${teamId}/${PaymentAPI.URL.BILLING}/${PaymentAPI.URL.CHARGES}`,
        };
        const response = await this.client.sendJSON(config);
        return response.data;
    }
    /**
     * @deprecated Use BillingAPI
     */
    async getInvoices(teamId, limit = PaymentAPI.DEFAULT_INVOICES_CHUNK_SIZE, startAfterInvoiceId) {
        const config = {
            method: 'get',
            params: {
                size: limit,
                start: startAfterInvoiceId,
            },
            url: `${PaymentAPI.URL.TEAMS}/${teamId}/${PaymentAPI.URL.BILLING}/${PaymentAPI.URL.INVOICES}`,
        };
        const response = await this.client.sendJSON(config);
        return response.data;
    }
    /**
     * @deprecated Use BillingAPI
     */
    async getSupportedCurrencies(teamId) {
        const config = {
            method: 'get',
            url: `${PaymentAPI.URL.TEAMS}/${teamId}/${PaymentAPI.URL.BILLING}/${PaymentAPI.URL.CURRENCIES}`,
        };
        const response = await this.client.sendJSON(config);
        return response.data;
    }
}
exports.PaymentAPI = PaymentAPI;
PaymentAPI.DEFAULT_INVOICES_CHUNK_SIZE = 10;
PaymentAPI.URL = {
    BILLING: 'billing',
    CHARGES: 'charges',
    CURRENCIES: 'currencies',
    INFO: 'info',
    INVOICES: 'invoices',
    PLAN: 'plan',
    PLANS: 'plans',
    TEAMS: '/teams',
};
//# sourceMappingURL=PaymentAPI.js.map