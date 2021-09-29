import type { Role } from '..';
import type { User, ManagedSource } from '../../user/';
export declare type TeamContact = Pick<User, 'id' | 'email' | 'accent_id' | 'handle' | 'name' | 'team'> & {
    /** Timestamp of invitation creation. */
    created_at?: string;
    managed_by?: ManagedSource;
    role?: Role;
    /** URL of the SAML identity provider. */
    saml_idp?: string;
};
