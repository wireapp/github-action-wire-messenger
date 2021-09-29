export interface BackendData {
    name: string;
    rest: string;
    ws: string;
}
export declare const Backend: {
    PRODUCTION: BackendData;
    STAGING: BackendData;
};
