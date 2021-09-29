import type { APIClient } from '@wireapp/api-client';
import type { GiphySearchOptions, GiphyMultipleResult, GiphyResult, GIPHY_RATING } from '@wireapp/api-client/src/giphy/';
export declare class GiphyService {
    private readonly apiClient;
    constructor(apiClient: APIClient);
    getRandomGif(tag?: string, rating?: GIPHY_RATING): Promise<GiphyResult>;
    getTrendingGif(rating?: GIPHY_RATING): Promise<GiphyMultipleResult>;
    searchGif(options: GiphySearchOptions): Promise<GiphyMultipleResult>;
}
