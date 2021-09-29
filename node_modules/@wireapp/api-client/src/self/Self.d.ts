import type { SSOSignature } from '../self/';
import type { QualifiedId, ManagedSource, User } from '../user/';
export interface Self extends User {
    locale: string;
    /**
     * What is the source of truth for this user; if it's SCIM
     * then the profile can't be edited via normal means.
     */
    managed_by?: ManagedSource;
    phone?: string;
    qualified_id?: QualifiedId;
    sso_id?: SSOSignature;
}
