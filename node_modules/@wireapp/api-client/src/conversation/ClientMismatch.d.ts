import type { UserClients } from './';
export interface ClientMismatch {
    deleted: UserClients;
    missing: UserClients;
    redundant: UserClients;
    time: string;
}
