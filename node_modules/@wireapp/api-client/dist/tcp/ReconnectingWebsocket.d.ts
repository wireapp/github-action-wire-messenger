import { CloseEvent, ErrorEvent, Event } from 'reconnecting-websocket';
export declare enum CloseEventCode {
    NORMAL_CLOSURE = 1000,
    GOING_AWAY = 1001,
    PROTOCOL_ERROR = 1002,
    UNSUPPORTED_DATA = 1003
}
export declare enum WEBSOCKET_STATE {
    CONNECTING = 0,
    OPEN = 1,
    CLOSING = 2,
    CLOSED = 3
}
export declare enum PingMessage {
    PING = "ping",
    PONG = "pong"
}
export declare class ReconnectingWebsocket {
    private readonly onReconnect;
    private static readonly RECONNECTING_OPTIONS;
    private readonly logger;
    private socket?;
    private pingerId?;
    private readonly PING_INTERVAL;
    private hasUnansweredPing;
    private onOpen?;
    private onMessage?;
    private onError?;
    private onClose?;
    constructor(onReconnect: () => Promise<string>, options?: {
        pingInterval?: number;
    });
    private readonly internalOnError;
    private readonly internalOnMessage;
    private readonly internalOnOpen;
    private readonly internalOnReconnect;
    private readonly internalOnClose;
    connect(): void;
    send(message: any): void;
    private startPinging;
    private stopPinging;
    private readonly sendPing;
    getState(): WEBSOCKET_STATE;
    disconnect(reason?: string, keepClosed?: boolean): void;
    private getReconnectingWebsocket;
    setOnOpen(onOpen: (event: Event) => void): void;
    setOnMessage(onMessage: (data: string) => void): void;
    setOnError(onError: (error: ErrorEvent) => void): void;
    setOnClose(onClose: (event: CloseEvent) => void): void;
}
