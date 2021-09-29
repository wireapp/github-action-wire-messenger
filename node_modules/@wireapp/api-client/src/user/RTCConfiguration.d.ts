import type { RTCIceServer } from '../user/';
export interface RTCConfiguration {
    ice_servers: RTCIceServer[];
    ttl: number;
}
