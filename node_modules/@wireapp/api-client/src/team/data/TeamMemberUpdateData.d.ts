import type { PermissionsData } from '../member/PermissionsData';
export interface TeamMemberUpdateData {
    permissions: PermissionsData;
    user: string;
}
