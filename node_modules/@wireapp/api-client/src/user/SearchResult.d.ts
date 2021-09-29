import type { Contact } from '../user/';
export interface SearchResult {
    documents: Contact[];
    found: number;
    returned: number;
    took: number;
}
