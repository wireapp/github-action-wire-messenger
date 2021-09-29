import type { SupportedCurrency } from './SupportedCurrency';
export interface Coupon {
    amountOff: number;
    name: string;
    percentOff: number;
}
export interface InvoiceUpcomingData {
    number: string;
    status: string;
    amount: number;
    balance: number;
    endingBalance: number;
    coupon: Coupon;
    currency: SupportedCurrency;
    date: number;
    discount: number;
    subtotal: number;
    tax: number;
    taxPercent: number;
    total: number;
}
