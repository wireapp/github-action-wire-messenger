/// <reference types="node" />
import type { Asset } from '@wireapp/protocol-messaging';
import type { AbortReason, AssetTransferState } from '../../conversation/';
import type { FileContent, FileMetaDataContent, ImageContent, LegalHoldStatus } from '../../conversation/content/';
import type { EncryptedAssetUploaded } from '../../cryptography/';
export declare type ImageMetaData = Asset.IImageMetaData;
export declare type VideoMetaData = Asset.IVideoMetaData;
export declare type Preview = Asset.IPreview;
export declare type Original = Asset.IOriginal;
export interface AssetBase {
    expectsReadConfirmation?: boolean;
    legalHoldStatus?: LegalHoldStatus;
}
export interface AssetContent extends AssetBase {
    abortReason?: AbortReason;
    original?: Original;
    preview?: Preview;
    status?: AssetTransferState;
    uploaded?: RemoteData;
}
export interface RemoteData extends Asset.IRemoteData {
    assetId: string;
    otrKey: Uint8Array | Buffer;
    sha256: Uint8Array | Buffer;
}
export interface AudioMetaData extends Omit<Asset.IAudioMetaData, 'normalizedLoudness'> {
    normalizedLoudness?: Uint8Array | Buffer | null;
}
export interface ImageAssetContent extends AssetBase {
    asset: EncryptedAssetUploaded;
    image: ImageContent;
}
export interface FileAssetContent extends AssetBase {
    asset: EncryptedAssetUploaded;
    file: FileContent;
}
export interface FileAssetMetaDataContent extends AssetBase {
    metaData: FileMetaDataContent;
}
export interface FileAssetAbortContent extends AssetBase {
    reason: AbortReason;
}
