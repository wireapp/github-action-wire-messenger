import type { LoginData } from '@wireapp/api-client/src/auth/';
export declare class LoginSanitizer {
    constructor();
    static removeNonPrintableCharacters(loginData: LoginData): void;
}
