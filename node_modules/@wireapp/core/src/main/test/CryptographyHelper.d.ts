import { keys } from '@wireapp/proteus';
import type { CryptographyService } from '../cryptography';
export declare function createEncodedCipherText(receiver: keys.IdentityKeyPair, preKey: keys.PreKey, text: string): Promise<string>;
export declare function getPlainText(cryptographyService: CryptographyService, encodedPreKeyMessage: string, sessionId?: string): Promise<string | void>;
