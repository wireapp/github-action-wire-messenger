import type { ConsentType } from './ConsentType';
export interface Consent {
    source: string;
    type: ConsentType;
    value: number;
}
