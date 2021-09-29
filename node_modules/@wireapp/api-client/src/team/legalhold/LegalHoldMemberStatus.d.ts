import type { PreKey } from '../../auth/';
export declare enum LegalHoldMemberStatus {
    DISABLED = "disabled",
    ENABLED = "enabled",
    PENDING = "pending",
    NO_CONSENT = "no_consent"
}
export interface LegalHoldEnabledMemberData {
    client: {
        id: string;
    };
    last_prekey: PreKey;
    status: LegalHoldMemberStatus.ENABLED | LegalHoldMemberStatus.PENDING;
}
export interface LegalHoldDisabledMemberData {
    status: LegalHoldMemberStatus.DISABLED | LegalHoldMemberStatus.NO_CONSENT;
}
export declare type LegalHoldMemberData = LegalHoldEnabledMemberData | LegalHoldDisabledMemberData;
