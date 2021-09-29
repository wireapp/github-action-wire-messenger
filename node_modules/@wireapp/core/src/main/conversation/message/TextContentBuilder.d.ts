import { LegalHoldStatus, LinkPreviewUploadedContent, MentionContent, QuoteContent } from '../content';
import type { EditedTextMessage, TextMessage, QuotableMessage } from './OtrMessage';
export declare class TextContentBuilder {
    private readonly content;
    private readonly payloadBundle;
    constructor(payloadBundle: TextMessage | EditedTextMessage);
    build(): TextMessage | EditedTextMessage;
    withLinkPreviews(linkPreviews?: LinkPreviewUploadedContent[]): TextContentBuilder;
    withMentions(mentions?: MentionContent[]): TextContentBuilder;
    withQuote(quote?: QuotableMessage | QuoteContent): TextContentBuilder;
    withReadConfirmation(expectsReadConfirmation?: boolean): TextContentBuilder;
    withLegalHoldStatus(legalHoldStatus?: LegalHoldStatus): TextContentBuilder;
}
