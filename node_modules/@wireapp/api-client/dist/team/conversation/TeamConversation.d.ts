export interface TeamConversation {
    /** The conversation ID */
    conversation: string;
    /** Indicates if this is a managed team conversation */
    managed: boolean;
}
export interface TeamConversationList {
    conversations: TeamConversation[];
}
