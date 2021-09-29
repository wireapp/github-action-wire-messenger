import type { Role } from '../member';
export interface TeamInvitation {
    created_at: string;
    created_by: string;
    email: string;
    id: string;
    name?: string;
    phone?: string;
    role: Role;
    team: string;
}
