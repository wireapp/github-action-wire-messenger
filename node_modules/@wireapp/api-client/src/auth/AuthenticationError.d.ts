import { BackendError, BackendErrorLabel, StatusCode, SyntheticErrorLabel } from '../http/';
export declare class AuthenticationError extends BackendError {
    constructor(message: string, label: BackendErrorLabel | SyntheticErrorLabel, code: StatusCode);
}
export declare class LoginTooFrequentError extends AuthenticationError {
    constructor(message: string, label?: BackendErrorLabel, code?: StatusCode);
}
export declare class InvalidCredentialsError extends AuthenticationError {
    constructor(message: string, label?: BackendErrorLabel, code?: StatusCode);
}
export declare class SuspendedAccountError extends AuthenticationError {
    constructor(message: string, label?: BackendErrorLabel, code?: StatusCode);
}
export declare class IdentifierExistsError extends AuthenticationError {
    constructor(message: string, label?: BackendErrorLabel, code?: StatusCode);
}
export declare class TokenExpiredError extends AuthenticationError {
    constructor(message: string, label?: BackendErrorLabel, code?: StatusCode);
}
export declare class InvalidTokenError extends AuthenticationError {
    constructor(message: string, label?: BackendErrorLabel, code?: StatusCode);
}
export declare class MissingCookieError extends AuthenticationError {
    constructor(message: string, label?: BackendErrorLabel, code?: StatusCode);
}
export declare class InvalidPhoneNumberError extends AuthenticationError {
    constructor(message: string, label?: SyntheticErrorLabel, code?: StatusCode);
}
export declare class ForbiddenPhoneNumberError extends AuthenticationError {
    constructor(message: string, label?: SyntheticErrorLabel, code?: StatusCode);
}
export declare class PasswordExistsError extends AuthenticationError {
    constructor(message: string, label?: BackendErrorLabel, code?: StatusCode);
}
