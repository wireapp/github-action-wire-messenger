import type { Permissions } from './Permissions';
export interface PermissionsData {
    /** The permissions bitmask which this user can assign to others */
    copy: Permissions;
    /** The permissions bitmask which applies to this user */
    self: Permissions;
}
