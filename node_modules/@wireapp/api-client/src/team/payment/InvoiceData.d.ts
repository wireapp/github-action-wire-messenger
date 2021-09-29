import type { SupportedCurrency } from '../payment/';
interface PaymentCoupon {
    amountOff: number;
    name: string;
    percentOff: number;
}
export interface InvoiceData {
    amount: number;
    balance: number;
    company: string;
    coupon: PaymentCoupon;
    currency: SupportedCurrency;
    custom: boolean;
    date: number;
    discount: number;
    subtotal: number;
    tax: number;
    taxPercent: number;
    total: number;
}
export {};
