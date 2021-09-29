import type { IQuote } from '@wireapp/protocol-messaging';
import type { AssetContent, LocationContent, TextContent } from '../content/';
export { IQuote as QuoteContent };
export interface QuoteMessageContent {
    content: AssetContent | LocationContent | TextContent;
    quotedMessageId: string;
}
