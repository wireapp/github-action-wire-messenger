export declare enum BillingStatus {
    ACTIVE = "active",
    CANCELED = "canceled",
    INCOMPLETE = "incomplete",
    PAST_DUE = "past_due",
    TRIALING = "trialing",
    UNPAID = "unpaid"
}
export interface BillingSuspension {
    created: number;
    graceEnding: number;
    invoice: string;
}
export interface BillingTeamData {
    id: string;
    customerId: string;
    created: number;
    bankTransfer: boolean;
    seats: number;
    status: BillingStatus;
    grace?: BillingSuspension;
    trialEndsAt: number;
}
