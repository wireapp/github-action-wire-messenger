import type { APIClient } from '@wireapp/api-client';
import type { MemberData, Members, NewTeamData, TeamChunkData, TeamData, UpdateTeamData } from '@wireapp/api-client/src/team/';
export declare class TeamService {
    private readonly apiClient;
    constructor(apiClient: APIClient);
    addMember(teamId: string, memberData: MemberData): Promise<void>;
    createTeam(teamData: NewTeamData): Promise<void>;
    deleteTeam(teamId: string, password: string): Promise<void>;
    getAllMembers(teamId: string): Promise<Members>;
    getTeam(teamId: string): Promise<TeamData>;
    getTeams(): Promise<TeamChunkData>;
    removeMember(teamId: string, userId: string, password: string): Promise<void>;
    updateMember(teamId: string, memberData: MemberData): Promise<void>;
    updateTeam(teamId: string, teamData: UpdateTeamData): Promise<void>;
}
