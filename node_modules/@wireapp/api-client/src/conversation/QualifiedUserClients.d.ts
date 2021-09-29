import { UserClients } from './UserClients';
export interface QualifiedUserClients {
    [domain: string]: UserClients;
}
