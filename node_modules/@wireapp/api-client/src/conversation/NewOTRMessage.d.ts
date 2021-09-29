import type { OTRRecipients } from './';
export interface NewOTRMessage<T extends string | Uint8Array> {
    /** Extra (symmetric) data (i.e. ciphertext) that is replicated for each recipient. */
    data?: T;
    /** The native push priority (default `high`) */
    native_priority?: 'low' | 'high';
    /** Whether to issue a native push to offline clients */
    native_push?: boolean;
    /** Map with per-recipient data */
    recipients: OTRRecipients<T>;
    /** Specifies which userIDs are forbidden from having missing clients. */
    report_missing?: string[];
    /** The sender's client ID */
    sender: string;
    /** Whether to put this message into the notification queue */
    transient?: boolean;
}
