import type { Member, OtherMember } from './';
export interface ConversationMembers {
    others: OtherMember[];
    self: Member;
}
