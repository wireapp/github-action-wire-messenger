import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import type { AccessTokenData } from '../../auth/';
import type { HttpClient } from '../../http/';
export declare const retrieveCookie: (response: AxiosResponse<AccessTokenData>) => Promise<AccessTokenData>;
export declare const sendRequestWithCookie: <T>(client: HttpClient, config: AxiosRequestConfig) => Promise<AxiosResponse<T>>;
