import { HttpClient, RequestCancelable } from '../../http';
import { TeamSearchOptions } from './TeamSearchOptions';
import { TeamSearchResult } from './TeamSearchResult';
export declare class TeamSearchAPI {
    private readonly client;
    constructor(client: HttpClient);
    static readonly URL: {
        SEARCH: string;
    };
    /**
     * Search for team members.
     * @param query The search query
     * @param options Search options (sort, order, filter, etc.)
     */
    getSearchMembers(teamId: string, query: string, options?: TeamSearchOptions): Promise<RequestCancelable<TeamSearchResult>>;
}
