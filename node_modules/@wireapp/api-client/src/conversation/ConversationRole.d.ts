export declare enum DefaultConversationRoleName {
    WIRE_ADMIN = "wire_admin",
    WIRE_MEMBER = "wire_member"
}
export interface ConversationRole {
    /** The set of actions allowed for this role */
    actions: string[];
    /**
     * Role name, between 2 and 128 chars, 'wire_' prefix is reserved for
     * roles designed by Wire (i.e., no custom roles can have the same prefix).
     * @see `DefaultConversationRoleName`
     */
    conversation_role: DefaultConversationRoleName | string;
}
export interface ConversationRolesList {
    conversation_roles: ConversationRole[];
}
