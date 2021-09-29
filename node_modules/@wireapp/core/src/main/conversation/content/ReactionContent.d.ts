import type { LegalHoldStatus } from '.';
import type { ReactionType } from '../';
export interface ReactionContent {
    legalHoldStatus?: LegalHoldStatus;
    originalMessageId: string;
    type: ReactionType;
}
