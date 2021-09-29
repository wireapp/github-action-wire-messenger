import { PublicClient } from './PublicClient';
export interface QualifiedUserClientMap {
    [domain: string]: {
        [userId: string]: PublicClient[];
    };
}
export interface QualifiedPublicClients {
    qualified_user_map: QualifiedUserClientMap;
}
