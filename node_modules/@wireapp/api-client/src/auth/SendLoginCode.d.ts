import type { SendActivationCode } from '../user';
export declare type SendLoginCode = Partial<Pick<SendActivationCode, 'phone' | 'voice_call'>> & {
    /** Forces validation via SMS/voice call code */
    force?: boolean;
};
