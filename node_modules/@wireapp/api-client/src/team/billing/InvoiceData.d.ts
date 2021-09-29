import type { SupportedCurrency } from './SupportedCurrency';
export interface InvoiceData {
    closed: boolean;
    currency: SupportedCurrency;
    date: number;
    id: string;
    number: string;
    paid: boolean;
    total: number;
    url: string;
}
