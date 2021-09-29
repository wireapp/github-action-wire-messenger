export declare type ProgressCallback = (progress: number) => void;
export declare const handleProgressEvent: (progressCallback?: ProgressCallback | undefined) => ((progressEvent: ProgressEvent) => void) | undefined;
