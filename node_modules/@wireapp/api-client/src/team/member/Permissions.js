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
exports.combinePermissions = exports.hasPermissions = exports.Permissions = void 0;
var Permissions;
(function (Permissions) {
    Permissions[Permissions["CREATE_CONVERSATION"] = 1] = "CREATE_CONVERSATION";
    Permissions[Permissions["DELETE_CONVERSATION"] = 2] = "DELETE_CONVERSATION";
    Permissions[Permissions["ADD_TEAM_MEMBER"] = 4] = "ADD_TEAM_MEMBER";
    Permissions[Permissions["REMOVE_TEAM_MEMBER"] = 8] = "REMOVE_TEAM_MEMBER";
    Permissions[Permissions["ADD_CONVERSATION_MEMBER"] = 16] = "ADD_CONVERSATION_MEMBER";
    Permissions[Permissions["REMOVE_CONVERSATION_MEMBER"] = 32] = "REMOVE_CONVERSATION_MEMBER";
    Permissions[Permissions["GET_BILLING"] = 64] = "GET_BILLING";
    Permissions[Permissions["SET_BILLING"] = 128] = "SET_BILLING";
    Permissions[Permissions["SET_TEAM_DATA"] = 256] = "SET_TEAM_DATA";
    Permissions[Permissions["GET_MEMBER_PERMISSIONS"] = 512] = "GET_MEMBER_PERMISSIONS";
    Permissions[Permissions["GET_TEAM_CONVERSATIONS"] = 1024] = "GET_TEAM_CONVERSATIONS";
    Permissions[Permissions["DELETE_TEAM"] = 2048] = "DELETE_TEAM";
    Permissions[Permissions["SET_MEMBER_PERMISSIONS"] = 4096] = "SET_MEMBER_PERMISSIONS";
})(Permissions = exports.Permissions || (exports.Permissions = {}));
const hasPermissions = (permissions, expectedPermissions) => {
    const validPermissions = Number.isSafeInteger(permissions) && permissions > 0;
    return validPermissions && (permissions & expectedPermissions) === expectedPermissions;
};
exports.hasPermissions = hasPermissions;
const combinePermissions = (permissionList) => {
    return permissionList.reduce((acc, permission) => acc | permission, 0);
};
exports.combinePermissions = combinePermissions;
//# sourceMappingURL=Permissions.js.map