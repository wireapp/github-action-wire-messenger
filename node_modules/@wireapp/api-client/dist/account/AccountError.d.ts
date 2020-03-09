import { BackendError, BackendErrorLabel, StatusCode, SyntheticErrorLabel } from '../http';
export declare class AccountError extends BackendError {
    constructor(message: string, label: BackendErrorLabel | SyntheticErrorLabel, code: StatusCode);
}
export declare class CustomBackendNotFoundError extends AccountError {
    constructor(message: string, label?: BackendErrorLabel, code?: StatusCode);
}
