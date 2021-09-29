import type { GiphyImage } from './GiphyImage';
export interface GiphyResult {
    data: GiphyImage;
    meta: {
        msg: string;
        response_id: string;
        status: number;
    };
}
export declare type GiphyMultipleResult = GiphyResult & {
    data: GiphyImage[];
    pagination: {
        count: number;
        offset: number;
        total_count: number;
    };
};
