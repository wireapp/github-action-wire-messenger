import { BackendError, BackendErrorLabel, StatusCode, SyntheticErrorLabel } from '../http/';
export declare class TeamError extends BackendError {
    constructor(message: string, label: BackendErrorLabel | SyntheticErrorLabel, code: StatusCode);
}
export declare class InviteEmailInUseError extends TeamError {
    constructor(message: string, label?: BackendErrorLabel, code?: StatusCode);
}
export declare class InvalidInvitationCodeError extends TeamError {
    constructor(message: string, label?: BackendErrorLabel, code?: StatusCode);
}
export declare class ServiceNotFoundError extends TeamError {
    constructor(message: string, label?: BackendErrorLabel | SyntheticErrorLabel, code?: StatusCode);
}
