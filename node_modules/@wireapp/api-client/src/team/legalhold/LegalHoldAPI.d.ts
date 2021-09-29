import type { HttpClient } from '../../http';
import type { LegalHoldData } from './LegalHoldData';
import type { LegalHoldMemberData } from './LegalHoldMemberStatus';
import type { NewLegalHoldData } from './NewLegalHoldData';
export declare class LegalHoldAPI {
    private readonly client;
    constructor(client: HttpClient);
    static readonly URL: {
        APPROVE_LEGAL_HOLD: string;
        LEGAL_HOLD: string;
        SETTINGS_LEGAL_HOLD: string;
    };
    getMemberLegalHold(teamId: string, userId: string): Promise<LegalHoldMemberData>;
    deleteMemberLegalHold(teamId: string, userId: string, password: string): Promise<void>;
    postMemberLegalHold(teamId: string, userId: string): Promise<void>;
    putMemberApproveLegalHold(teamId: string, userId: string, password: string): Promise<void>;
    getSettings(teamId: string): Promise<LegalHoldData>;
    deleteSettings(teamId: string, password: string): Promise<void>;
    postSettings(teamId: string, legalHoldData: NewLegalHoldData): Promise<LegalHoldData>;
}
