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
exports.NotificationDatabaseRepository = exports.DatabaseKeys = exports.DatabaseStores = void 0;
const CryptographyDatabaseRepository_1 = require("../cryptography/CryptographyDatabaseRepository");
var DatabaseStores;
(function (DatabaseStores) {
    DatabaseStores["EVENTS"] = "events";
})(DatabaseStores = exports.DatabaseStores || (exports.DatabaseStores = {}));
var DatabaseKeys;
(function (DatabaseKeys) {
    DatabaseKeys["PRIMARY_KEY_LAST_EVENT"] = "z.storage.StorageKey.EVENT.LAST_DATE";
    DatabaseKeys["PRIMARY_KEY_LAST_NOTIFICATION"] = "z.storage.StorageKey.NOTIFICATION.LAST_ID";
})(DatabaseKeys = exports.DatabaseKeys || (exports.DatabaseKeys = {}));
const STORE_AMPLIFY = CryptographyDatabaseRepository_1.CryptographyDatabaseRepository.STORES.AMPLIFY;
class NotificationDatabaseRepository {
    constructor(storeEngine) {
        this.storeEngine = storeEngine;
    }
    getNotificationEventList() {
        return this.storeEngine.readAll(DatabaseStores.EVENTS);
    }
    async getLastEventDate() {
        const { value } = await this.storeEngine.read(STORE_AMPLIFY, DatabaseKeys.PRIMARY_KEY_LAST_EVENT);
        return new Date(value);
    }
    async updateLastEventDate(eventDate) {
        await this.storeEngine.update(STORE_AMPLIFY, DatabaseKeys.PRIMARY_KEY_LAST_EVENT, { value: eventDate.toISOString() });
        return eventDate;
    }
    async createLastEventDate(eventDate) {
        await this.storeEngine.create(STORE_AMPLIFY, DatabaseKeys.PRIMARY_KEY_LAST_EVENT, { value: eventDate.toISOString() });
        return eventDate;
    }
    async getLastNotificationId() {
        const { value } = await this.storeEngine.read(STORE_AMPLIFY, DatabaseKeys.PRIMARY_KEY_LAST_NOTIFICATION);
        return value;
    }
    async updateLastNotificationId(lastNotification) {
        await this.storeEngine.updateOrCreate(STORE_AMPLIFY, DatabaseKeys.PRIMARY_KEY_LAST_NOTIFICATION, {
            value: lastNotification.id,
        });
        return lastNotification.id;
    }
}
exports.NotificationDatabaseRepository = NotificationDatabaseRepository;
//# sourceMappingURL=NotificationDatabaseRepository.js.map