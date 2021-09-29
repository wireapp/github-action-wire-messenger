import type { ClientPreKey } from '../auth/';
import type { QualifiedId } from '../user';
export interface PreKeyBundleBase {
    /** PreKeys of all clients */
    clients: ClientPreKey[];
}
export interface PreKeyBundle extends PreKeyBundleBase {
    /** The user ID */
    user: string;
}
export interface QualifiedPreKeyBundle extends PreKeyBundleBase {
    /** The qualified user */
    user: QualifiedId;
}
