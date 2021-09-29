import { OtherMember } from '../OtherMember';
export interface ConversationMemberJoinData {
    users?: OtherMember[];
    user_ids: string[];
}
