import { HttpClient, ProgressCallback, RequestCancelable } from '../../http/';
import type { MemberData, Members } from '../member/';
import { MemberCSVResponse } from './MemberCSVResponse';
import { UpdatedMemberData } from './UpdatedMemberData';
export declare class MemberAPI {
    private readonly client;
    private static readonly DEFAULT_MEMBERS_CHUNK_SIZE;
    constructor(client: HttpClient);
    static readonly URL: {
        MEMBERS: string;
        CSV: string;
        MEMBERS_BY_ID_LIST: string;
    };
    getMember(teamId: string, userId: string): Promise<MemberData>;
    deleteMember(teamId: string, userId: string, password: string): Promise<void>;
    postMembers(teamId: string, member: MemberData): Promise<void>;
    putMembers(teamId: string, member: UpdatedMemberData): Promise<void>;
    /**
     * This endpoint returns all members of the a team unless it's a large team (>2000 team member).
     * If the queried team is a large team the `hasMore` flag will switch to `true`.
     */
    getAllMembers(teamId: string): Promise<Members>;
    getMembers(teamId: string, parameters: {
        ids: string[];
    }, limit?: number): Promise<MemberData[]>;
    private _getMembers;
    getMemberListCSV(teamId: string, progressCallback?: ProgressCallback): Promise<RequestCancelable<MemberCSVResponse>>;
}
