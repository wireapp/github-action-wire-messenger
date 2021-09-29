/// <reference types="node" />
import { AssetContent, LocationContent, TextContent } from '../conversation/content';
export declare type AvailableMessageContent = AssetContent | LocationContent | TextContent;
export declare class MessageHashService {
    private readonly messageContent;
    private readonly timestamp;
    constructor(messageContent: AvailableMessageContent, timestamp?: number);
    private createSha256Hash;
    private convertToUtf16BE;
    private getAssetBytes;
    private getTimestampBuffer;
    private getLocationBytes;
    private getTextBytes;
    private getBytes;
    getHash(): Buffer;
}
