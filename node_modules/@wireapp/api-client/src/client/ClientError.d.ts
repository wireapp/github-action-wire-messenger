import { BackendError, BackendErrorLabel, StatusCode } from '../http';
export declare class ClientError extends BackendError {
    constructor(message: string, label: BackendErrorLabel, code: StatusCode);
}
export declare class ClientCapabilityRemovedError extends ClientError {
    constructor(message: string, label?: BackendErrorLabel, code?: StatusCode);
}
