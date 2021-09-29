import type { MemberData } from '../member/MemberData';
export interface NewTeamData {
    /** User binding team */
    binding?: boolean;
    /** Team icon (asset ID) */
    icon: string;
    /** Team icon (asset key) */
    icon_key?: string;
    /** Initial team member IDs (between 1 and 127) */
    members?: MemberData[];
    name: string;
}
