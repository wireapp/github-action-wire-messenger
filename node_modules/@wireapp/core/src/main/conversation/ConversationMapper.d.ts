import { ConversationEvent } from '@wireapp/api-client/src/event';
import { PayloadBundle, PayloadBundleSource } from './message/PayloadBundle';
export declare class ConversationMapper {
    static mapConversationEvent(event: ConversationEvent, source: PayloadBundleSource): PayloadBundle;
    private static mapConversationEventType;
}
