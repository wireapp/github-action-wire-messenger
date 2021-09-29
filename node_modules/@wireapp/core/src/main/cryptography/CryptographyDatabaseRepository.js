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
exports.CryptographyDatabaseRepository = exports.DatabaseStores = void 0;
var DatabaseStores;
(function (DatabaseStores) {
    DatabaseStores["AMPLIFY"] = "amplify";
    DatabaseStores["CLIENTS"] = "clients";
    DatabaseStores["KEYS"] = "keys";
    DatabaseStores["PRE_KEYS"] = "prekeys";
    DatabaseStores["SESSIONS"] = "sessions";
})(DatabaseStores = exports.DatabaseStores || (exports.DatabaseStores = {}));
class CryptographyDatabaseRepository {
    constructor(storeEngine) {
        this.storeEngine = storeEngine;
    }
    deleteStores() {
        return Promise.all([
            this.storeEngine.deleteAll(CryptographyDatabaseRepository.STORES.AMPLIFY),
            this.storeEngine.deleteAll(CryptographyDatabaseRepository.STORES.CLIENTS),
            this.storeEngine.deleteAll(CryptographyDatabaseRepository.STORES.KEYS),
            this.storeEngine.deleteAll(CryptographyDatabaseRepository.STORES.SESSIONS),
            this.storeEngine.deleteAll(CryptographyDatabaseRepository.STORES.PRE_KEYS),
        ]);
    }
}
exports.CryptographyDatabaseRepository = CryptographyDatabaseRepository;
CryptographyDatabaseRepository.STORES = DatabaseStores;
//# sourceMappingURL=CryptographyDatabaseRepository.js.map