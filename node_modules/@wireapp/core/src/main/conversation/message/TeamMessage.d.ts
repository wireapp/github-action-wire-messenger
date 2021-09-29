import type { TeamConversationCreateData, TeamConversationDeleteData, TeamMemberJoinData, TeamMemberLeaveData, TeamUpdateData } from '@wireapp/api-client/src/team/data';
import type { BasePayloadBundle, PayloadBundleType } from './PayloadBundle';
export interface TeamConversationCreateMessage extends BasePayloadBundle {
    content: TeamConversationCreateData;
    type: PayloadBundleType.TEAM_CONVERSATION_CREATE;
}
export interface TeamMemberLeaveMessage extends BasePayloadBundle {
    content: TeamMemberLeaveData;
    type: PayloadBundleType.TEAM_MEMBER_LEAVE;
}
export interface TeamConversationDeleteMessage extends BasePayloadBundle {
    content: TeamConversationDeleteData;
    type: PayloadBundleType.TEAM_CONVERSATION_DELETE;
}
export interface TeamDeleteMessage extends BasePayloadBundle {
    content: null;
    type: PayloadBundleType.TEAM_DELETE;
}
export interface TeamMemberJoinMessage extends BasePayloadBundle {
    content: TeamMemberJoinData;
    type: PayloadBundleType.TEAM_MEMBER_JOIN;
}
export interface TeamMemberLeaveMesssage extends BasePayloadBundle {
    content: TeamMemberLeaveData;
    type: PayloadBundleType.TEAM_MEMBER_LEAVE;
}
export interface TeamUpdateMessage extends BasePayloadBundle {
    content: TeamUpdateData;
    type: PayloadBundleType.TEAM_UPDATE;
}
export declare type TeamMessage = TeamConversationCreateMessage | TeamMemberLeaveMessage | TeamConversationDeleteMessage | TeamDeleteMessage | TeamMemberJoinMessage | TeamMemberLeaveMesssage | TeamUpdateMessage;
