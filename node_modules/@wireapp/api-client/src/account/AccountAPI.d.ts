import { HttpClient } from '../http';
import type { BackendConfigData } from './BackendConfigData';
import type { CallConfigData } from './CallConfigData';
import type { DomainData } from './DomainData';
import type { SSOSettings } from './SSOSettings';
export declare class AccountAPI {
    private readonly client;
    constructor(client: HttpClient);
    static readonly URL: {
        ACTIVATE: string;
        BACKEND_CONFIG: string;
        BY_DOMAIN: string;
        CALLS: string;
        CALLS_CONFIG: string;
        CALLS_CONFIG_V2: string;
        CUSTOM_BACKEND: string;
        DELETE: string;
        PASSWORD_RESET: string;
        PASSWORD_RESET_COMPLETE: string;
        PROVIDER: string;
        SETTINGS: string;
        SSO: string;
    };
    /**
     * Delete account
     * @see https://staging-nginz-https.zinfra.io/swagger-ui/#!/delete
     */
    postDeleteAccount(key: string, code: string): Promise<void>;
    /**
     * Start password reset flow
     * @see https://staging-nginz-https.zinfra.io/swagger-ui/#!/password-reset
     */
    postPasswordReset(email: string): Promise<void>;
    /**
     * Start bot password reset flow
     * @see https://staging-nginz-https.zinfra.io/swagger-ui/#!/provider/password-reset
     */
    postBotPasswordReset(email: string): Promise<void>;
    /**
     * Finish password reset flow
     * @see https://staging-nginz-https.zinfra.io/swagger-ui/#!/password-reset/complete
     */
    postPasswordResetComplete(password: string, key: string, code: string): Promise<void>;
    /**
     * Finish bot password reset flow
     * @see https://staging-nginz-https.zinfra.io/swagger-ui/#!/provider/password-reset/complete
     */
    postBotPasswordResetComplete(password: string, key: string, code: string): Promise<void>;
    /**
     * Verify email address
     * @see https://staging-nginz-https.zinfra.io/swagger-ui/#!/activate
     */
    getVerifyEmail(key: string, code: string): Promise<void>;
    /**
     * Verify service
     * @see https://staging-nginz-https.zinfra.io/swagger-ui/#!/provider/activate
     */
    getVerifyBot(key: string, code: string): Promise<void>;
    getDomain(domain: string): Promise<DomainData>;
    getSSOSettings(): Promise<SSOSettings>;
    /**
     * Retrieve all TURN server addresses and credentials.
     * Clients are expected to do a DNS lookup to resolve the IP addresses of the given hostnames
     *
     * @param limit Limits the number of ICE-Candidates returned. [1..10]
     */
    getCallConfig(limit?: number): Promise<CallConfigData>;
    getConfig(): Promise<BackendConfigData>;
}
