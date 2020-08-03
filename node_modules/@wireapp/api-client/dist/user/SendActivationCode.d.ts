export interface SendActivationCode {
    /** Email address to send the code to. */
    email?: string;
    /** Locale to use for the activation code template. */
    locale?: string;
    /** E.164 phone number to send the code to. */
    phone?: string;
    /** Request the code with a call instead (default is SMS). */
    voice_call?: boolean;
}
