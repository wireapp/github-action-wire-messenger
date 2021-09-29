import type { Cookie as ToughCookie } from 'tough-cookie';
import type { AccessTokenData } from '../auth';
export declare const ObfuscationUtil: {
    obfuscateAccessToken: (accessToken: AccessTokenData, enabled?: boolean) => AccessTokenData;
    obfuscateCookie: (cookie: ToughCookie, enabled?: boolean) => ToughCookie;
};
