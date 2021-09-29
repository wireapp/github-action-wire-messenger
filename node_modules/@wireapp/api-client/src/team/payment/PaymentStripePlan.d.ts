import type { PaymentInterval, SupportedCurrency } from '../payment/';
export interface PaymentStripePlan {
    amount: number;
    currency: SupportedCurrency;
    id: string;
    interval: PaymentInterval;
    name: string;
    trialPeriodDays: number;
}
