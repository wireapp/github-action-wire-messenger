import type { TeamData } from '../team/team/TeamData';
import type { User } from '../user/';
export declare type RegisterData = Pick<User, 'accent_id' | 'assets' | 'email' | 'name'> & {
    /** Email activation code */
    email_code?: string;
    /** Life time of a new temporary guest account */
    expires_in?: number;
    /** Regular invitation code. Mutually exclusive with `team_code` */
    invitation_code?: string;
    label?: string;
    locale?: string;
    password?: string;
    phone?: string;
    /** Phone activation code */
    phone_code?: string;
    /** Data for new team account creation */
    team?: TeamData;
    /** Team invitation code for joining an existing team. Mutually exclusive with `invitation_code` */
    team_code?: string;
};
