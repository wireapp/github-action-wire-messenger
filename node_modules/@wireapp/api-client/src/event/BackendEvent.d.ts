import type { ConversationEvent, TeamEvent, UserEvent } from '.';
import type { CONVERSATION_EVENT } from './ConversationEvent';
import type { TEAM_EVENT } from './TeamEvent';
import type { USER_EVENT } from './UserEvent';
export declare type BackendEvent = ConversationEvent | UserEvent | TeamEvent;
export declare type BackendEventType = CONVERSATION_EVENT | USER_EVENT | TEAM_EVENT;
