import { BackendError } from './';
export declare class BackendErrorMapper {
    static get ERRORS(): Record<number, Record<string, Record<string, BackendError>>>;
    static map(error: BackendError): BackendError;
}
