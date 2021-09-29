import type { LegalHoldStatus } from './';
export interface LocationContent {
    expectsReadConfirmation?: boolean;
    latitude: number;
    legalHoldStatus?: LegalHoldStatus;
    longitude: number;
    name?: string;
    zoom?: number;
}
