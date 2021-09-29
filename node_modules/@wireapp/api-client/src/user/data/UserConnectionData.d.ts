import type { Connection } from '../../connection';
export interface UserConnectionData {
    connection: Connection;
    /** For some statuses (in `connection.status`) no user field is provided. */
    user?: {
        name: string;
    };
}
