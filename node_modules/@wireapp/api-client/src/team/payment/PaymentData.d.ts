import type { InvoiceData, PaymentPlan } from './';
import type { PaymentPlanID } from './PaymentPlan';
export declare enum PaymentStatus {
    ACTIVE = "active",
    CANCELED = "canceled",
    PAST_DUE = "past_due",
    TRIALING = "trialing",
    UNPAID = "unpaid"
}
export interface PaymentCardData {
    brand: string;
    country: string;
    digits: string;
    expMonth: number;
    expYear: number;
    holder: string;
    zip: string;
}
export interface PaymentSuspension {
    created: number;
    graceEnding: number;
    invoice: string;
}
export interface PaymentData {
    bankTransfer: boolean;
    card: PaymentCardData;
    invoice: InvoiceData;
    plan: PaymentPlan;
    planId: PaymentPlanID;
    seats: number;
    status: PaymentStatus;
    suspend?: PaymentSuspension;
    trialEndsAt: number;
}
