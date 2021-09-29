import type { ClientType } from '../client/';
export interface Context {
    clientId?: string;
    clientType: ClientType;
    domain?: string;
    userId: string;
}
