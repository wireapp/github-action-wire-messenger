export interface ICECandidate {
    credential: string;
    urls: string[];
    username: string;
}
export interface CallConfigData {
    ice_servers: ICECandidate[];
    ttl: number;
}
