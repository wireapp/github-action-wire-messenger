import { QualifiedId } from '../user/QualifiedId';
import { Conversation } from './Conversation';
export interface RemoteConversations {
    failed?: QualifiedId[];
    found?: Conversation[];
    not_found?: QualifiedId[];
}
