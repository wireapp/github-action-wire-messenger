import type { Connection } from '../connection/';
export interface UserConnectionList {
    connections: Connection[];
    has_more: boolean;
}
