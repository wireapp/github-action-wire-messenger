import type { Role } from '../member';
export interface NewTeamInvitation {
    email: string;
    inviter_name: string;
    locale: string;
    name?: string;
    phone?: string;
    role: Role;
}
