import type { HttpClient } from '../../http/';
import type { Provider, Service, ServiceWhitelistData, Services } from './';
export declare class ServiceAPI {
    private readonly client;
    constructor(client: HttpClient);
    static readonly URL: {
        PROVIDERS: string;
        SERVICES: string;
        TEAMS: string;
        WHITELIST: string;
        WHITELISTED: string;
    };
    getServices(limit?: number, start?: string, tags?: string[] | string): Promise<Services>;
    getTeamServices(teamId: string, limit?: number): Promise<Services>;
    getProvider(providerId: string): Promise<Provider>;
    getProviderServices(providerId: string): Promise<Services>;
    getService(providerId: string, serviceId: string): Promise<Service>;
    postServiceWhitelist(teamId: string, whitelistData: ServiceWhitelistData): Promise<Services>;
}
