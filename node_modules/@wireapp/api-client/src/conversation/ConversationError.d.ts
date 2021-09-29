import { BackendError, BackendErrorLabel, StatusCode } from '../http/';
export declare class ConversationError extends BackendError {
    constructor(message: string, label: BackendErrorLabel, code: StatusCode);
}
export declare class ConversationIsUnknownError extends ConversationError {
    constructor(message: string, label?: BackendErrorLabel, code?: StatusCode);
}
export declare class ConversationOperationError extends ConversationError {
    constructor(message: string, label?: BackendErrorLabel, code?: StatusCode);
}
export declare class ConversationLegalholdMissingConsentError extends ConversationError {
    constructor(message: string, label?: BackendErrorLabel, code?: StatusCode);
}
export declare class ConversationCodeNotFoundError extends ConversationError {
    constructor(message: string, label?: BackendErrorLabel, code?: StatusCode);
}
export declare class ConversationFullError extends ConversationError {
    constructor(message: string, label?: BackendErrorLabel, code?: StatusCode);
}
