import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import type { HttpClient } from '../../http/';
export declare const retrieveCookie: <T>(response: AxiosResponse<T>) => Promise<T>;
/**
 * @see https://github.com/wearezeta/backend-api-docs/wiki/API-User-Authentication#token-refresh
 */
export declare const sendRequestWithCookie: <T>(client: HttpClient, config: AxiosRequestConfig) => Promise<AxiosResponse<T>>;
