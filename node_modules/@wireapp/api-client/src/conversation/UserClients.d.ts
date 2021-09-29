declare type ClientIds = string[];
export interface UserClients {
    [userId: string]: ClientIds;
}
export {};
