import type { APIClient } from '@wireapp/api-client';
import type { CallConfigData } from '@wireapp/api-client/src/account/CallConfigData';
export declare class AccountService {
    private readonly apiClient;
    constructor(apiClient: APIClient);
    getCallConfig(): Promise<CallConfigData>;
}
