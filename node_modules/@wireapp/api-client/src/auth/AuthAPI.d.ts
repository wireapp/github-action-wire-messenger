import type { AxiosResponse } from 'axios';
import { HttpClient } from '../http/';
import type { AccessTokenData, LoginData, SendLoginCode } from '../auth/';
import type { CookieList } from './CookieList';
import type { LoginCodeResponse } from './LoginCodeResponse';
import type { RegisterData } from './RegisterData';
import type { User } from '../user/';
export declare class AuthAPI {
    private readonly client;
    constructor(client: HttpClient);
    static readonly URL: {
        ACCESS: string;
        COOKIES: string;
        EMAIL: string;
        INITIATE_BIND: string;
        INITIATE_LOGIN: string;
        LOGIN: string;
        LOGOUT: string;
        REGISTER: string;
        REMOVE: string;
        SELF: string;
        SEND: string;
        SSO: string;
    };
    getCookies(labels?: string[]): Promise<AxiosResponse<CookieList>>;
    postCookiesRemove(password: string, labels?: string[], ids?: string[]): Promise<void>;
    postLogin(loginData: LoginData): Promise<AccessTokenData>;
    /**
     * This operation generates and sends a login code. A login code can be used only once and times out after 10
     * minutes. Only one login code may be pending at a time.
     * @param loginRequest Phone number to use for login SMS or voice call.
     * @see https://staging-nginz-https.zinfra.io/swagger-ui/tab.html#!/sendLoginCode
     */
    postLoginSend(loginRequest: SendLoginCode): Promise<LoginCodeResponse>;
    postLogout(): Promise<void>;
    postRegister(userAccount: RegisterData): Promise<User>;
    putEmail(emailData: {
        email: string;
    }): Promise<void>;
    headInitiateLogin(ssoCode: string): Promise<void>;
    headInitiateBind(ssoCode: string): Promise<void>;
}
