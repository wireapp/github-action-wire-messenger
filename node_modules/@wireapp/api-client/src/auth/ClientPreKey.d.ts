import type { PreKey } from '../auth/';
export interface ClientPreKey {
    /** The client ID */
    client: string;
    prekey: PreKey;
}
