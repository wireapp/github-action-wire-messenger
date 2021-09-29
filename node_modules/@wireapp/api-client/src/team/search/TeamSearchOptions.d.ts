import { Role } from '..';
import type { TeamContact } from './TeamContact';
export declare enum SearchOrder {
    ASCENDING = "asc",
    DESCENDING = "desc"
}
export interface TeamSearchOptions {
    /** Filter results by member role */
    frole?: Role[];
    /** Max number of search results. Defaults to 15 results. Min 1, max 500. */
    size?: number;
    /** Sort results */
    sortby?: keyof Pick<TeamContact, 'email' | 'name' | 'handle' | 'created_at' | 'role' | 'managed_by' | 'saml_idp'>;
    /** Sort order (asc | desc | undefined) */
    sortorder?: SearchOrder;
}
