import type { StatusCodes as StatusCode } from 'http-status-codes';
import type { BackendErrorLabel } from '../http/';
import { SyntheticErrorLabel } from './BackendErrorLabel';
export declare class BackendError extends Error {
    code?: StatusCode;
    label: BackendErrorLabel | SyntheticErrorLabel;
    message: string;
    constructor(message: string, label?: BackendErrorLabel | SyntheticErrorLabel, code?: StatusCode);
}
