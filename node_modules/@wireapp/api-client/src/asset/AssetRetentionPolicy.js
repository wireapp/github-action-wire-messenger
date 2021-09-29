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
exports.AssetRetentionPolicy = void 0;
/**
 * Policies can be found at:
 * https://github.com/wireapp/wire-server/blob/dc3e9a8af5250c0d045e96a31aa23c255b4e01a3/libs/cargohold-types/src/CargoHold/Types/V3.hs#L156-L177
 */
var AssetRetentionPolicy;
(function (AssetRetentionPolicy) {
    AssetRetentionPolicy["ETERNAL"] = "eternal";
    AssetRetentionPolicy["ETERNAL_INFREQUENT_ACCESS"] = "eternal-infrequent_access";
    AssetRetentionPolicy["EXPIRING"] = "expiring";
    AssetRetentionPolicy["PERSISTENT"] = "persistent";
    AssetRetentionPolicy["VOLATILE"] = "volatile";
})(AssetRetentionPolicy = exports.AssetRetentionPolicy || (exports.AssetRetentionPolicy = {}));
//# sourceMappingURL=AssetRetentionPolicy.js.map