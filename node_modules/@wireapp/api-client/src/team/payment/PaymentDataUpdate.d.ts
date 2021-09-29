import type { PaymentInterval } from '../payment/';
export interface PaymentDataUpdate {
    coupon?: string;
    interval?: PaymentInterval;
    source?: string;
}
