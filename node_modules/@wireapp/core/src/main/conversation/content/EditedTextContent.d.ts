import type { QuoteContent, TextContent } from '../content/';
export interface EditedTextContent extends TextContent {
    originalMessageId: string;
    /**
     * While this field exists in the Protobuf spec, it should be
     * ignored on the receiver side in an edited message.
     *
     * See https://github.com/wireapp/generic-message-proto/blob/v1.22.1/proto/messages.proto#L54
     */
    quote?: QuoteContent;
}
