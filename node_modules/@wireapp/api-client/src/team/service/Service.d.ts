import type { UserAsset } from '../../user/';
export interface Service {
    assets: UserAsset[];
    description: string;
    enabled: boolean;
    id: string;
    name: string;
    provider: string;
    summary: string;
    tags: string[];
}
