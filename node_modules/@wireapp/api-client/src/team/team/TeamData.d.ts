import type { SupportedCurrency } from '../payment/';
export interface TeamData {
    /** User binding team */
    binding: boolean;
    /** Team creator's user ID */
    creator: string;
    currency?: SupportedCurrency;
    /** Team icon (asset ID) */
    icon: string;
    /** Team icon (asset key) */
    icon_key?: string;
    id: string;
    name: string;
}
