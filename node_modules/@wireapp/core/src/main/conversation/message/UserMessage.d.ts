import type { UserActivateData, UserClientAddData, UserClientRemoveData, UserConnectionData, UserDeleteData, UserLegalHoldDisableData, UserLegalHoldEnableData, UserLegalHoldRequestData, UserPropertiesSetData, UserUpdateData } from '@wireapp/api-client/src/user/data';
import type { BasePayloadBundle, PayloadBundleType } from './PayloadBundle';
export interface UserActivateMessage extends BasePayloadBundle {
    content: UserActivateData;
    type: PayloadBundleType.USER_ACTIVATE;
}
export interface UserClientAddMessage extends BasePayloadBundle {
    content: UserClientAddData;
    type: PayloadBundleType.USER_CLIENT_ADD;
}
export interface UserLegalHoldRequestMessage extends BasePayloadBundle {
    content: UserLegalHoldRequestData;
    type: PayloadBundleType.USER_LEGAL_HOLD_REQUEST;
}
export interface UserLegalHoldEnableMessage extends BasePayloadBundle {
    content: UserLegalHoldEnableData;
    type: PayloadBundleType.USER_LEGAL_HOLD_ENABLE;
}
export interface UserLegalHoldDisableMessage extends BasePayloadBundle {
    content: UserLegalHoldDisableData;
    type: PayloadBundleType.USER_LEGAL_HOLD_DISABLE;
}
export interface UserClientRemoveMessage extends BasePayloadBundle {
    content: UserClientRemoveData;
    type: PayloadBundleType.USER_CLIENT_REMOVE;
}
export interface UserConnectionMessage extends BasePayloadBundle {
    content: UserConnectionData;
    type: PayloadBundleType.USER_CONNECTION;
}
export interface UserDeleteMessage extends BasePayloadBundle {
    content: UserDeleteData;
    type: PayloadBundleType.USER_DELETE;
}
export interface UserPropertiesSetEvent extends BasePayloadBundle {
    content: UserPropertiesSetData;
    type: PayloadBundleType.USER_PROPERTIES_SET;
}
export interface UserUpdateMessage extends BasePayloadBundle {
    content: UserUpdateData;
    type: PayloadBundleType.USER_UPDATE;
}
export declare type UserMessage = UserActivateMessage | UserClientAddMessage | UserLegalHoldRequestMessage | UserLegalHoldEnableMessage | UserLegalHoldDisableMessage | UserClientRemoveMessage | UserConnectionMessage | UserDeleteMessage | UserPropertiesSetEvent | UserUpdateMessage;
