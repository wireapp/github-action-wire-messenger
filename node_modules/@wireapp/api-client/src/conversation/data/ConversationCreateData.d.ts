import type { Conversation } from '../Conversation';
export interface ConversationCreateData extends Conversation {
    /** @deprecated */
    last_event: string;
    /** @deprecated */
    last_event_time: string;
}
