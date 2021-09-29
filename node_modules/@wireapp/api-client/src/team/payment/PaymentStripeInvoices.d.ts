import type { PaymentStripeInvoice } from './PaymentStripeInvoice';
export interface PaymentStripeInvoices {
    has_more: boolean;
    invoices: PaymentStripeInvoice[];
}
