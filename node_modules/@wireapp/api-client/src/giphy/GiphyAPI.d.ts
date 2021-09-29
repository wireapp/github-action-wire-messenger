import type { GiphySearchOptions, GiphyRandomOptions, GiphyTrendingOptions, GiphyIdOptions } from './GiphyOptions';
import type { GiphyResult, GiphyMultipleResult } from './GiphyResult';
import type { HttpClient } from '../http/';
export declare class GiphyAPI {
    private readonly client;
    constructor(client: HttpClient);
    static readonly URL: {
        GIPHY: string;
        PROXY: string;
        RANDOM: string;
        SEARCH: string;
        TRENDING: string;
    };
    /**
     * Get multiple Giphy images by IDs.
     * @see https://developers.giphy.com/docs/api/endpoint#get-gifs-by-id
     */
    getGiphyByIds(options: GiphyIdOptions): Promise<GiphyMultipleResult>;
    /**
     * Get a Giphy image by its ID.
     * @see https://developers.giphy.com/docs/api/endpoint#get-gif-by-id
     */
    getGiphyById(id: string): Promise<GiphyResult>;
    /**
     * Get a random GIF from Giphy.
     * @see https://developers.giphy.com/docs/api/endpoint#random
     */
    getGiphyRandom(options?: GiphyRandomOptions): Promise<GiphyResult>;
    /**
     * Get GIF search results from Giphy.
     * @see https://developers.giphy.com/docs/api/endpoint#search
     */
    getGiphySearch(options: GiphySearchOptions): Promise<GiphyMultipleResult>;
    /**
     * Get GIF trending results from Giphy.
     * @see https://developers.giphy.com/docs/api/endpoint#trending
     */
    getGiphyTrending(options: GiphyTrendingOptions): Promise<GiphyMultipleResult>;
}
