export declare class MessageTimer {
    private readonly conversationLevelTimers;
    private readonly messageLevelTimers;
    constructor();
    getConversationLevelTimer(conversationId: string): number;
    getMessageLevelTimer(conversationId: string): number;
    getMessageTimer(conversationId: string): number;
    setConversationLevelTimer(conversationId: string, messageTimer: number): void;
    setMessageLevelTimer(conversationId: string, messageTimer: number): void;
}
