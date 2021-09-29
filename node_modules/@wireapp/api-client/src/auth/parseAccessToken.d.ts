export declare enum AccessTokenType {
    ACCESS_DATA = "access-data",
    USER_DATA = "user-data"
}
export interface AccessTokenInfo {
    clientId: string;
    expirationDate: Date;
    keyIndex: number;
    tag: string;
    token: string;
    type: AccessTokenType;
    /** User data only exists in fields from cookies (e.g. "zuid") */
    userData?: string;
    userId: string;
    version: number;
}
export declare function parseValue(text: string, key: string): string;
export declare function parseAccessToken(accessToken: string): AccessTokenInfo;
