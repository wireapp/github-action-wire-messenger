import { FEATURE_KEY } from '../team';
import type { TeamFeatureConfigurationUpdateEventData, TeamConversationCreateData, TeamConversationDeleteData, TeamMemberJoinData, TeamMemberLeaveData, TeamMemberUpdateData, TeamUpdateData } from '../team/data';
export declare enum TEAM_EVENT {
    CONVERSATION_CREATE = "team.conversation-create",
    CONVERSATION_DELETE = "team.conversation-delete",
    CREATE = "team.create",
    DELETE = "team.delete",
    MEMBER_JOIN = "team.member-join",
    MEMBER_LEAVE = "team.member-leave",
    MEMBER_UPDATE = "team.member-update",
    UPDATE = "team.update",
    FEATURE_CONFIG_UPDATE = "feature-config.update"
}
export declare type TeamEventData = TeamConversationCreateData | TeamConversationDeleteData | TeamMemberLeaveData | TeamMemberUpdateData | TeamUpdateData | TeamFeatureConfigurationUpdateEventData | null;
export declare type TeamEvent = TeamConversationCreateEvent | TeamConversationDeleteEvent | TeamCreateEvent | TeamDeleteEvent | TeamMemberJoinEvent | TeamMemberLeaveEvent | TeamMemberUpdateEvent | TeamFeatureConfigurationUpdateEvent | TeamUpdateEvent;
export interface BaseTeamEvent {
    data: TeamEventData;
    team: string;
    time: string;
    type: TEAM_EVENT;
}
export interface TeamConversationCreateEvent extends BaseTeamEvent {
    data: TeamConversationCreateData;
    type: TEAM_EVENT.CONVERSATION_CREATE;
}
export interface TeamConversationDeleteEvent extends BaseTeamEvent {
    data: TeamConversationDeleteData;
    type: TEAM_EVENT.CONVERSATION_DELETE;
}
export interface TeamCreateEvent extends BaseTeamEvent {
    type: TEAM_EVENT.CREATE;
}
export interface TeamDeleteEvent extends BaseTeamEvent {
    data: null;
    type: TEAM_EVENT.DELETE;
}
export interface TeamMemberJoinEvent extends BaseTeamEvent {
    data: TeamMemberJoinData;
    type: TEAM_EVENT.MEMBER_JOIN;
}
export interface TeamMemberLeaveEvent extends BaseTeamEvent {
    data: TeamMemberLeaveData;
    type: TEAM_EVENT.MEMBER_LEAVE;
}
export interface TeamMemberUpdateEvent extends BaseTeamEvent {
    data: TeamMemberUpdateData;
    type: TEAM_EVENT.MEMBER_UPDATE;
}
export interface TeamUpdateEvent extends BaseTeamEvent {
    data: TeamUpdateData;
    type: TEAM_EVENT.UPDATE;
}
export interface TeamFeatureConfigurationUpdateEvent extends BaseTeamEvent {
    data: TeamFeatureConfigurationUpdateEventData;
    name: FEATURE_KEY;
    type: TEAM_EVENT.FEATURE_CONFIG_UPDATE;
}
