export interface OTRClientMap<T extends string | Uint8Array> {
    /** User ID → Encrypted Payload (use `string` for base64 and `Uint8Array` for Protobuf) */
    [clientId: string]: T;
}
