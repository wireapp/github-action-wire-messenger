export interface ConversationCode {
    /** Conversation code (random) */
    code: string;
    /** Stable conversation identifier */
    key: string;
    /** Full URI (containing key/code) to join a conversation */
    uri?: string;
}
