import { QualifiedId } from '../../user';
export declare enum MemberLeaveReason {
    LEGAL_HOLD_POLICY_CONFLICT = "legalhold-policy-conflict"
}
/**
 * Member can be removed by users or by the system.
 * In case Legalhold is not supported a reason is set.
 */
export interface ConversationMemberLeaveData {
    qualified_user_ids: QualifiedId[];
    user_ids: string[];
    reason?: MemberLeaveReason;
}
