import type { OTRClientMap } from './';
export interface OTRRecipients<T extends string | Uint8Array> {
    [userId: string]: OTRClientMap<T>;
}
export interface QualifiedOTRRecipients {
    [domain: string]: OTRRecipients<Uint8Array>;
}
