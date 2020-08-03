export declare enum LegalHoldStatus {
    DISABLED = "disabled",
    ENABLED_CONFIGURED = "configured",
    ENABLED_NOT_CONFIGURED = "not_configured"
}
export interface LegalHoldSettings {
    auth_token: string;
    base_url: string;
    fingerprint: string;
    public_key: string;
    team_id: string;
}
export interface LegalHoldDataUnconfigured {
    enabled: Exclude<LegalHoldStatus, LegalHoldStatus.ENABLED_CONFIGURED>;
}
export interface LegalHoldDataConfigured {
    enabled: LegalHoldStatus.ENABLED_CONFIGURED;
    settings: LegalHoldSettings;
}
export declare type LegalHoldData = LegalHoldDataUnconfigured | LegalHoldDataConfigured;
