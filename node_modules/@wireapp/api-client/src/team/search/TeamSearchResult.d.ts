import type { TeamContact } from './TeamContact';
export interface TeamSearchResult {
    documents: TeamContact[];
    found: number;
    returned: number;
    took: number;
}
