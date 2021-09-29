import type { ConversationOtherMemberUpdateData } from './data';
import type { ServiceRef } from './';
import type { QualifiedId } from '../user/QualifiedId';
export interface OtherMember extends Partial<ConversationOtherMemberUpdateData> {
    /** The user ID. */
    id: string;
    qualified_id?: QualifiedId;
    /** The reference to the owning provider, if the member is a service. */
    service?: ServiceRef;
    /**
     * The member status. Currently this is always 0, indicating a regular member.
     * Other status values might be used in the future
     */
    status: SERVICE_MEMBER_STATUS;
}
export declare enum SERVICE_MEMBER_STATUS {
    REGULAR_MEMBER = 0
}
