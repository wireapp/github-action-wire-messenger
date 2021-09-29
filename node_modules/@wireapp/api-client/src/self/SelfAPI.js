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
exports.SelfAPI = void 0;
class SelfAPI {
    constructor(client) {
        this.client = client;
    }
    /**
     * Remove your email address.
     * @see https://staging-nginz-https.zinfra.io/swagger-ui/#!/users/removeEmail
     */
    async deleteEmail() {
        const config = {
            method: 'delete',
            url: `${SelfAPI.URL.SELF}/${SelfAPI.URL.EMAIL}`,
        };
        await this.client.sendJSON(config);
    }
    /**
     * Remove your phone number.
     * @see https://staging-nginz-https.zinfra.io/swagger-ui/#!/users/removePhone
     */
    async deletePhone() {
        const config = {
            method: 'delete',
            url: `${SelfAPI.URL.SELF}/${SelfAPI.URL.PHONE}`,
        };
        await this.client.sendJSON(config);
    }
    /**
     * Initiate account deletion.
     * @see https://staging-nginz-https.zinfra.io/swagger-ui/#!/users/deleteUser
     */
    async deleteSelf(deleteData) {
        const config = {
            data: deleteData,
            method: 'delete',
            url: SelfAPI.URL.SELF,
        };
        await this.client.sendJSON(config);
    }
    /**
     * Get your profile name.
     * @see https://staging-nginz-https.zinfra.io/swagger-ui/#!/users/selfName
     */
    async getName() {
        const config = {
            method: 'get',
            url: `${SelfAPI.URL.SELF}/${SelfAPI.URL.NAME}`,
        };
        const response = await this.client.sendJSON(config);
        return response.data;
    }
    /**
     * Get your consents.
     * @see https://staging-nginz-https.zinfra.io/swagger-ui/#!/users/consent
     */
    async getConsents() {
        const config = {
            method: 'get',
            url: `${SelfAPI.URL.SELF}/${SelfAPI.URL.CONSENT}`,
        };
        const response = await this.client.sendJSON(config);
        return response.data;
    }
    /**
     * Put your consent.
     * @see https://staging-nginz-https.zinfra.io/swagger-ui/#!/users/consent
     */
    async putConsent(consent) {
        const config = {
            data: consent,
            method: 'put',
            url: `${SelfAPI.URL.SELF}/${SelfAPI.URL.CONSENT}`,
        };
        await this.client.sendJSON(config);
    }
    /**
     * Get your profile
     * @see https://staging-nginz-https.zinfra.io/swagger-ui/#!/users/self
     */
    async getSelf(traceStates = []) {
        traceStates.push({ position: 'SelfAPI.getSelf', vendor: 'api-client' });
        const config = {
            headers: {
                tracestate: traceStates.map(state => `${state.vendor}=${state.position}`).join(','),
            },
            method: 'get',
            url: SelfAPI.URL.SELF,
        };
        const response = await this.client.sendJSON(config);
        return response.data;
    }
    /**
     * Change your handle.
     * @param handleData The new handle
     * @see https://staging-nginz-https.zinfra.io/swagger-ui/#!/users/changeHandle
     */
    async putHandle(handleData) {
        const config = {
            data: handleData,
            method: 'put',
            url: `${SelfAPI.URL.SELF}/${SelfAPI.URL.HANDLE}`,
        };
        await this.client.sendJSON(config);
    }
    /**
     * Change your locale.
     * @param localeData The new locale
     * @see https://staging-nginz-https.zinfra.io/swagger-ui/#!/users/changeLocale
     */
    async putLocale(localeData) {
        const config = {
            data: localeData,
            method: 'put',
            url: `${SelfAPI.URL.SELF}/${SelfAPI.URL.LOCALE}`,
        };
        await this.client.sendJSON(config);
    }
    /**
     * Change your password.
     * @param passwordData The new password
     * @see https://staging-nginz-https.zinfra.io/swagger-ui/#!/users/changePassword
     */
    async putPassword(passwordData) {
        const config = {
            data: passwordData,
            method: 'put',
            url: `${SelfAPI.URL.SELF}/${SelfAPI.URL.PASSWORD}`,
        };
        await this.client.sendJSON(config);
    }
    /**
     * Change your phone number.
     * @param phoneData The new phone number (E.164 format)
     * @see https://staging-nginz-https.zinfra.io/swagger-ui/#!/users/changePhone
     */
    async putPhone(phoneData) {
        const config = {
            data: phoneData,
            method: 'put',
            url: `${SelfAPI.URL.SELF}/${SelfAPI.URL.PHONE}`,
        };
        await this.client.sendJSON(config);
    }
    /**
     * Update your profile.
     * @param profileData The new profile data
     * @see https://staging-nginz-https.zinfra.io/swagger-ui/#!/users/updateSelf
     */
    async putSelf(profileData) {
        const config = {
            data: profileData,
            method: 'put',
            url: SelfAPI.URL.SELF,
        };
        await this.client.sendJSON(config);
    }
    /**
     * Check if password is set.
     */
    headPassword() {
        const config = {
            method: 'head',
            url: `${SelfAPI.URL.SELF}/${SelfAPI.URL.PASSWORD}`,
        };
        return this.client.sendJSON(config);
    }
}
exports.SelfAPI = SelfAPI;
SelfAPI.URL = {
    CONSENT: 'consent',
    EMAIL: 'email',
    HANDLE: 'handle',
    LOCALE: 'locale',
    NAME: 'name',
    PASSWORD: 'password',
    PHONE: 'phone',
    SELF: '/self',
};
//# sourceMappingURL=SelfAPI.js.map