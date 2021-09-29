import type { LegalHoldMemberStatus } from '../legalhold';
import type { PermissionsData } from './PermissionsData';
export interface MemberData {
    /** Timestamp of invitation creation. */
    created_at?: string;
    /** ID of the inviting user. */
    created_by?: string;
    legalhold_status?: LegalHoldMemberStatus;
    permissions: PermissionsData;
    user: string;
}
