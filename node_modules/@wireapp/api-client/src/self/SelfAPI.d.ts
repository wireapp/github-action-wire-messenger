import type { AxiosResponse } from 'axios';
import type { HttpClient, TraceState } from '../http/';
import type { ChangePassword, Consent, ConsentResults, Delete, Name, Self } from './';
import type { UserUpdate } from '../user/';
export declare class SelfAPI {
    private readonly client;
    constructor(client: HttpClient);
    static readonly URL: {
        CONSENT: string;
        EMAIL: string;
        HANDLE: string;
        LOCALE: string;
        NAME: string;
        PASSWORD: string;
        PHONE: string;
        SELF: string;
    };
    /**
     * Remove your email address.
     * @see https://staging-nginz-https.zinfra.io/swagger-ui/#!/users/removeEmail
     */
    deleteEmail(): Promise<void>;
    /**
     * Remove your phone number.
     * @see https://staging-nginz-https.zinfra.io/swagger-ui/#!/users/removePhone
     */
    deletePhone(): Promise<void>;
    /**
     * Initiate account deletion.
     * @see https://staging-nginz-https.zinfra.io/swagger-ui/#!/users/deleteUser
     */
    deleteSelf(deleteData: Delete): Promise<void>;
    /**
     * Get your profile name.
     * @see https://staging-nginz-https.zinfra.io/swagger-ui/#!/users/selfName
     */
    getName(): Promise<Name>;
    /**
     * Get your consents.
     * @see https://staging-nginz-https.zinfra.io/swagger-ui/#!/users/consent
     */
    getConsents(): Promise<ConsentResults>;
    /**
     * Put your consent.
     * @see https://staging-nginz-https.zinfra.io/swagger-ui/#!/users/consent
     */
    putConsent(consent: Consent): Promise<void>;
    /**
     * Get your profile
     * @see https://staging-nginz-https.zinfra.io/swagger-ui/#!/users/self
     */
    getSelf(traceStates?: TraceState[]): Promise<Self>;
    /**
     * Change your handle.
     * @param handleData The new handle
     * @see https://staging-nginz-https.zinfra.io/swagger-ui/#!/users/changeHandle
     */
    putHandle(handleData: {
        handle: string;
    }): Promise<void>;
    /**
     * Change your locale.
     * @param localeData The new locale
     * @see https://staging-nginz-https.zinfra.io/swagger-ui/#!/users/changeLocale
     */
    putLocale(localeData: {
        locale: string;
    }): Promise<void>;
    /**
     * Change your password.
     * @param passwordData The new password
     * @see https://staging-nginz-https.zinfra.io/swagger-ui/#!/users/changePassword
     */
    putPassword(passwordData: ChangePassword): Promise<void>;
    /**
     * Change your phone number.
     * @param phoneData The new phone number (E.164 format)
     * @see https://staging-nginz-https.zinfra.io/swagger-ui/#!/users/changePhone
     */
    putPhone(phoneData: {
        phone: string;
    }): Promise<void>;
    /**
     * Update your profile.
     * @param profileData The new profile data
     * @see https://staging-nginz-https.zinfra.io/swagger-ui/#!/users/updateSelf
     */
    putSelf(profileData: UserUpdate): Promise<void>;
    /**
     * Check if password is set.
     */
    headPassword(): Promise<AxiosResponse<void>>;
}
