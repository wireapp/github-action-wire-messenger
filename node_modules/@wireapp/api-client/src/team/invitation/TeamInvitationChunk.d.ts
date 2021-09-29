import type { TeamInvitation } from '../invitation/';
export interface TeamInvitationChunk {
    has_more: boolean;
    invitations: TeamInvitation[];
}
