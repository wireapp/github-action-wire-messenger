import type { LegalHoldStatus, LinkPreviewUploadedContent, MentionContent, QuoteContent } from '../content/';
export interface TextContent {
    expectsReadConfirmation?: boolean;
    legalHoldStatus?: LegalHoldStatus;
    linkPreviews?: LinkPreviewUploadedContent[];
    mentions?: MentionContent[];
    quote?: QuoteContent;
    text: string;
}
