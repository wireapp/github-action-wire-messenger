export interface BackendCookie {
    /** The cookie's creation time */
    created: string;
    /** The cookie's expiration time */
    expires: string;
    /** The primary cookie identifier */
    id: number;
    /** The cookie's label */
    label: string;
    /** The cookie's type */
    type: 'session' | 'persistent';
}
export interface CookieList {
    cookies: BackendCookie[];
}
