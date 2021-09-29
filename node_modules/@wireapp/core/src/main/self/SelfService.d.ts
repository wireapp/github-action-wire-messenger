import type { APIClient } from '@wireapp/api-client';
import type { Self } from '@wireapp/api-client/src/self/';
export declare class SelfService {
    private readonly apiClient;
    constructor(apiClient: APIClient);
    checkUsername(username: string): Promise<boolean>;
    checkUsernames(usernames: string[]): Promise<string[]>;
    getName(): Promise<string>;
    getSelf(): Promise<Self>;
    getUsername(): Promise<string | undefined>;
    setName(name: string): Promise<void>;
    setUsername(username: string): Promise<void>;
}
