import { LinkPreview, Text } from '@wireapp/protocol-messaging';
import type { LinkPreviewUploadedContent } from '../content';
import type { EditedTextMessage, TextMessage } from './OtrMessage';
export declare class MessageToProtoMapper {
    static mapLinkPreviews(linkPreviews: LinkPreviewUploadedContent[]): LinkPreview[];
    static mapText(payloadBundle: TextMessage | EditedTextMessage): Text;
}
