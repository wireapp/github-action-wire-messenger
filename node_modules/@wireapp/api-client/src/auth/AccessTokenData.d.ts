export interface AccessTokenData {
    /** Token format is described in: https://wire-docs.wire.com/download/Wire+Security+Whitepaper.pdf */
    access_token: string;
    /** Expiration in seconds */
    expires_in: number;
    token_type: 'Bearer';
    user: string;
}
