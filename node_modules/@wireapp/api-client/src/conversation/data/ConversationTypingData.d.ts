export declare enum CONVERSATION_TYPING {
    STARTED = "started",
    STOPPED = "stopped"
}
export interface ConversationTypingData {
    status: CONVERSATION_TYPING.STARTED | CONVERSATION_TYPING.STOPPED;
}
