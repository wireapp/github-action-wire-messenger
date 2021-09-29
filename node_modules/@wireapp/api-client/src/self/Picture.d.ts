export interface Picture {
    content_length: number;
    content_type: string;
    data: string | null;
    id: string;
    info: {
        correlation_id: string;
        height: number;
        name?: string | null;
        nonce: string;
        original_height: number;
        original_width: number;
        public: boolean;
        tag: string;
        width: number;
    };
}
