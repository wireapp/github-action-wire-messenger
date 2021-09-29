import { Permissions } from './Permissions';
import type { PermissionsData } from './PermissionsData';
export declare enum Role {
    ADMIN = "admin",
    EXTERNAL = "partner",
    MEMBER = "member",
    OWNER = "owner"
}
export declare const roleToPermissions: (role: string) => Permissions;
export declare const permissionsToRole: (permissions: PermissionsData) => Role | undefined;
export declare const isPartner: (permissions: PermissionsData) => boolean;
export declare const isMember: (permissions: PermissionsData) => boolean;
export declare const isAdmin: (permissions: PermissionsData) => boolean;
export declare const isOwner: (permissions: PermissionsData) => boolean;
export declare const isAtLeastPartner: (permissions: PermissionsData) => boolean;
export declare const isAtLeastMember: (permissions: PermissionsData) => boolean;
export declare const isAtLeastAdmin: (permissions: PermissionsData) => boolean;
export declare const isAtLeastEqual: (permissions: PermissionsData, otherPermissions: PermissionsData) => boolean;
