import type { QualifiedId } from '../user/QualifiedId';
export interface QualifiedConversationIds {
    qualified_conversations: QualifiedId[];
    has_more: boolean;
    paging_state: string;
}
