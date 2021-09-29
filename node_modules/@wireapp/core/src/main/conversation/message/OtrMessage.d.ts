import type { AssetContent, ButtonActionContent, ButtonActionConfirmationContent, CallingContent, ClearedContent, ClientActionContent, CompositeContent, ConfirmationContent, DeletedContent, EditedTextContent, FileAssetAbortContent, FileAssetContent, FileAssetMetaDataContent, HiddenContent, ImageAssetContent, KnockContent, LocationContent, ReactionContent, TextContent } from '../content';
import type { BasePayloadBundle, PayloadBundleType } from './PayloadBundle';
export interface TextMessage extends BasePayloadBundle {
    content: TextContent;
    type: PayloadBundleType.TEXT;
}
export interface ButtonActionMessage extends BasePayloadBundle {
    content: ButtonActionContent;
    type: PayloadBundleType.BUTTON_ACTION;
}
export interface ButtonActionConfirmationMessage extends BasePayloadBundle {
    content: ButtonActionConfirmationContent;
    type: PayloadBundleType.BUTTON_ACTION_CONFIRMATION;
}
export interface CallMessage extends BasePayloadBundle {
    content: CallingContent;
    type: PayloadBundleType.CALL;
}
export interface CompositeMessage extends BasePayloadBundle {
    content: CompositeContent;
    type: PayloadBundleType.COMPOSITE;
}
export interface EditedTextMessage extends BasePayloadBundle {
    content: EditedTextContent;
    type: PayloadBundleType.MESSAGE_EDIT;
}
export interface FileAssetMessage extends BasePayloadBundle {
    content: FileAssetContent;
    type: PayloadBundleType.ASSET;
}
export interface FileAssetMetaDataMessage extends BasePayloadBundle {
    content: FileAssetMetaDataContent;
    type: PayloadBundleType.ASSET_META;
}
export interface FileAssetAbortMessage extends BasePayloadBundle {
    content: FileAssetAbortContent;
    type: PayloadBundleType.ASSET_ABORT;
}
export interface ImageAssetMessageOutgoing extends BasePayloadBundle {
    content: ImageAssetContent;
    type: PayloadBundleType.ASSET_IMAGE;
}
export interface ImageAssetMessage extends BasePayloadBundle {
    content: AssetContent;
    type: PayloadBundleType.ASSET_IMAGE;
}
export interface LocationMessage extends BasePayloadBundle {
    content: LocationContent;
    type: PayloadBundleType.LOCATION;
}
export interface ReactionMessage extends BasePayloadBundle {
    content: ReactionContent;
    type: PayloadBundleType.REACTION;
}
export interface ConfirmationMessage extends BasePayloadBundle {
    content: ConfirmationContent;
    type: PayloadBundleType.CONFIRMATION;
}
export interface PingMessage extends BasePayloadBundle {
    content: KnockContent;
    type: PayloadBundleType.PING;
}
export interface ResetSessionMessage extends BasePayloadBundle {
    content: ClientActionContent;
    type: PayloadBundleType.CLIENT_ACTION;
}
export interface ClearConversationMessage extends BasePayloadBundle {
    content: ClearedContent;
    type: PayloadBundleType.CONVERSATION_CLEAR;
}
export interface HideMessage extends BasePayloadBundle {
    content: HiddenContent;
    type: PayloadBundleType.MESSAGE_HIDE;
}
export interface DeleteMessage extends BasePayloadBundle {
    content: DeletedContent;
    type: PayloadBundleType.MESSAGE_DELETE;
}
export declare type OtrMessage = ButtonActionMessage | ButtonActionConfirmationMessage | CallMessage | ClearConversationMessage | CompositeMessage | ConfirmationMessage | DeleteMessage | EditedTextMessage | FileAssetAbortMessage | FileAssetMessage | FileAssetMetaDataMessage | HideMessage | ImageAssetMessage | ImageAssetMessageOutgoing | LocationMessage | PingMessage | ReactionMessage | ResetSessionMessage | TextMessage;
export declare type QuotableMessage = EditedTextMessage | ImageAssetMessage | LocationMessage | TextMessage;
