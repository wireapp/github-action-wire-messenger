import { UserEvent } from '@wireapp/api-client/src/event';
import { PayloadBundle, PayloadBundleSource } from '../conversation';
export declare class UserMapper {
    static mapUserEvent(event: UserEvent, selfUserId: string, source: PayloadBundleSource): PayloadBundle | void;
}
