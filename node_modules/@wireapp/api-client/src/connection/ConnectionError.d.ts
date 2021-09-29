import { BackendError, BackendErrorLabel, StatusCode } from '../http';
export declare class ConnectionError extends BackendError {
    constructor(message: string, label: BackendErrorLabel, code: StatusCode);
}
export declare class ConnectionLegalholdMissingConsentError extends ConnectionError {
    constructor(message: string, label?: BackendErrorLabel, code?: StatusCode);
}
