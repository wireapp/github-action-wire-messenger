import { BackendError, BackendErrorLabel, StatusCode, SyntheticErrorLabel } from '../http/';
export declare class UserError extends BackendError {
    constructor(message: string, label: BackendErrorLabel | SyntheticErrorLabel, code?: StatusCode);
}
export declare class UserIsUnknownError extends UserError {
    constructor(message: string, label?: BackendErrorLabel, code?: StatusCode);
}
export declare class UnconnectedUserError extends UserError {
    constructor(message: string, label?: BackendErrorLabel, code?: StatusCode);
}
export declare class RequestCancellationError extends UserError {
    constructor(message: string, label?: SyntheticErrorLabel, code?: StatusCode);
}
