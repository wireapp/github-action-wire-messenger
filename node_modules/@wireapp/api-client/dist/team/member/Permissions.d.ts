export declare enum Permissions {
    CREATE_CONVERSATION = 1,
    DELETE_CONVERSATION = 2,
    ADD_TEAM_MEMBER = 4,
    REMOVE_TEAM_MEMBER = 8,
    ADD_CONVERSATION_MEMBER = 16,
    REMOVE_CONVERSATION_MEMBER = 32,
    GET_BILLING = 64,
    SET_BILLING = 128,
    SET_TEAM_DATA = 256,
    GET_MEMBER_PERMISSIONS = 512,
    GET_TEAM_CONVERSATIONS = 1024,
    DELETE_TEAM = 2048,
    SET_MEMBER_PERMISSIONS = 4096
}
export declare const hasPermissions: (permissions: Permissions, expectedPermissions: Permissions) => boolean;
export declare const combinePermissions: (permissionList: Permissions[]) => Permissions;
