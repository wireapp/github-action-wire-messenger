import type { DefaultConversationRoleName, MutedStatus, ServiceRef } from './';
export interface Member {
    /**
     * Role name, between 2 and 128 chars, 'wire_' prefix is reserved for
     * roles designed by Wire (i.e., no custom roles can have the same prefix).
     * @see `DefaultConversationRoleName`
     */
    conversation_role?: DefaultConversationRoleName | string;
    /** Whether the conversation with this user is hidden */
    hidden?: boolean;
    /** A reference point for (un)hiding */
    hidden_ref: string | null;
    id: string;
    /** Whether to notify on conversation updates for this user */
    otr_archived?: boolean;
    /** A reference point for (un)archiving */
    otr_archived_ref: string | null;
    otr_muted_ref: string | null;
    otr_muted_status: MutedStatus | null;
    service: ServiceRef | null;
    status_ref: string;
    status_time: string;
}
