import type { CRUDEngine } from '@wireapp/store-engine';
export declare enum DatabaseStores {
    AMPLIFY = "amplify",
    CLIENTS = "clients",
    KEYS = "keys",
    PRE_KEYS = "prekeys",
    SESSIONS = "sessions"
}
export declare class CryptographyDatabaseRepository {
    private readonly storeEngine;
    static readonly STORES: typeof DatabaseStores;
    constructor(storeEngine: CRUDEngine);
    deleteStores(): Promise<boolean[]>;
}
