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
exports.isAtLeastEqual = exports.isAtLeastAdmin = exports.isAtLeastMember = exports.isAtLeastPartner = exports.isOwner = exports.isAdmin = exports.isMember = exports.isPartner = exports.permissionsToRole = exports.roleToPermissions = exports.Role = void 0;
const Permissions_1 = require("./Permissions");
var Role;
(function (Role) {
    Role["ADMIN"] = "admin";
    Role["EXTERNAL"] = "partner";
    Role["MEMBER"] = "member";
    Role["OWNER"] = "owner";
})(Role = exports.Role || (exports.Role = {}));
const roleToPermissions = (role) => {
    switch (role.toLowerCase()) {
        case Role.OWNER: {
            return (0, Permissions_1.combinePermissions)([
                (0, exports.roleToPermissions)(Role.ADMIN),
                Permissions_1.Permissions.DELETE_TEAM,
                Permissions_1.Permissions.GET_BILLING,
                Permissions_1.Permissions.SET_BILLING,
            ]);
        }
        case Role.ADMIN: {
            return (0, Permissions_1.combinePermissions)([
                (0, exports.roleToPermissions)(Role.MEMBER),
                Permissions_1.Permissions.ADD_TEAM_MEMBER,
                Permissions_1.Permissions.REMOVE_TEAM_MEMBER,
                Permissions_1.Permissions.SET_MEMBER_PERMISSIONS,
                Permissions_1.Permissions.SET_TEAM_DATA,
            ]);
        }
        case Role.MEMBER: {
            return (0, Permissions_1.combinePermissions)([
                (0, exports.roleToPermissions)(Role.EXTERNAL),
                Permissions_1.Permissions.ADD_CONVERSATION_MEMBER,
                Permissions_1.Permissions.DELETE_CONVERSATION,
                Permissions_1.Permissions.GET_MEMBER_PERMISSIONS,
                Permissions_1.Permissions.REMOVE_CONVERSATION_MEMBER,
            ]);
        }
        case Role.EXTERNAL: {
            return (0, Permissions_1.combinePermissions)([Permissions_1.Permissions.CREATE_CONVERSATION, Permissions_1.Permissions.GET_TEAM_CONVERSATIONS]);
        }
        default: {
            return 0;
        }
    }
};
exports.roleToPermissions = roleToPermissions;
const permissionsToRole = (permissions) => {
    if ((0, Permissions_1.hasPermissions)(permissions.self, (0, exports.roleToPermissions)(Role.OWNER))) {
        return Role.OWNER;
    }
    if ((0, Permissions_1.hasPermissions)(permissions.self, (0, exports.roleToPermissions)(Role.ADMIN))) {
        return Role.ADMIN;
    }
    if ((0, Permissions_1.hasPermissions)(permissions.self, (0, exports.roleToPermissions)(Role.MEMBER))) {
        return Role.MEMBER;
    }
    if ((0, Permissions_1.hasPermissions)(permissions.self, (0, exports.roleToPermissions)(Role.EXTERNAL))) {
        return Role.EXTERNAL;
    }
    return undefined;
};
exports.permissionsToRole = permissionsToRole;
const isPartner = (permissions) => {
    return !!(permissions && (0, exports.permissionsToRole)(permissions) === Role.EXTERNAL);
};
exports.isPartner = isPartner;
const isMember = (permissions) => {
    return !!(permissions && (0, exports.permissionsToRole)(permissions) === Role.MEMBER);
};
exports.isMember = isMember;
const isAdmin = (permissions) => {
    return !!(permissions && (0, exports.permissionsToRole)(permissions) === Role.ADMIN);
};
exports.isAdmin = isAdmin;
const isOwner = (permissions) => {
    return !!(permissions && (0, exports.permissionsToRole)(permissions) === Role.OWNER);
};
exports.isOwner = isOwner;
const isAtLeastPartner = (permissions) => {
    return (0, exports.isPartner)(permissions) || (0, exports.isMember)(permissions) || (0, exports.isAdmin)(permissions) || (0, exports.isOwner)(permissions);
};
exports.isAtLeastPartner = isAtLeastPartner;
const isAtLeastMember = (permissions) => {
    return (0, exports.isMember)(permissions) || (0, exports.isAdmin)(permissions) || (0, exports.isOwner)(permissions);
};
exports.isAtLeastMember = isAtLeastMember;
const isAtLeastAdmin = (permissions) => {
    return (0, exports.isAdmin)(permissions) || (0, exports.isOwner)(permissions);
};
exports.isAtLeastAdmin = isAtLeastAdmin;
const isAtLeastEqual = (permissions, otherPermissions) => {
    return (((0, exports.isOwner)(permissions) && (0, exports.isOwner)(otherPermissions)) ||
        ((0, exports.isAtLeastAdmin)(permissions) && (0, exports.isAdmin)(otherPermissions)) ||
        ((0, exports.isAtLeastMember)(permissions) && (0, exports.isMember)(otherPermissions)) ||
        ((0, exports.isAtLeastPartner)(permissions) && (0, exports.isPartner)(otherPermissions)));
};
exports.isAtLeastEqual = isAtLeastEqual;
//# sourceMappingURL=Role.js.map