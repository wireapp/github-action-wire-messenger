export declare class Cookie {
    expiration: string;
    zuid: string;
    constructor(zuid: string, expiration: string);
    get isExpired(): boolean;
}
