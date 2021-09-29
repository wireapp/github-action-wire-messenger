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
exports.ClientType = void 0;
var ClientType;
(function (ClientType) {
    /** 'none' is an artificial client type, not sent by the backend */
    ClientType["NONE"] = "none";
    ClientType["PERMANENT"] = "permanent";
    ClientType["TEMPORARY"] = "temporary";
})(ClientType = exports.ClientType || (exports.ClientType = {}));
//# sourceMappingURL=ClientType.js.map