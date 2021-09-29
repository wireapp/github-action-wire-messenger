import type { HttpClient } from '../../http/';
import type { PaymentBillingData, PaymentData, PaymentDataUpdate, PaymentPlan, PaymentStripeCharge, PaymentStripeInvoices, PaymentStripePlan } from './';
export declare class PaymentAPI {
    private readonly client;
    static readonly DEFAULT_INVOICES_CHUNK_SIZE = 10;
    constructor(client: HttpClient);
    static readonly URL: {
        BILLING: string;
        CHARGES: string;
        CURRENCIES: string;
        INFO: string;
        INVOICES: string;
        PLAN: string;
        PLANS: string;
        TEAMS: string;
    };
    /**
     * @deprecated Use BillingAPI
     */
    putPaymentData(teamId: string, paymentData: PaymentDataUpdate): Promise<PaymentData>;
    /**
     * @deprecated Use BillingAPI
     */
    getPaymentData(teamId: string): Promise<PaymentData>;
    /**
     * @deprecated Use BillingAPI
     */
    deletePaymentData(teamId: string, paymentData: Partial<PaymentDataUpdate>): Promise<PaymentData>;
    /**
     * @deprecated Use BillingAPI
     */
    putPaymentBilling(teamId: string, billingInfo: PaymentBillingData): Promise<PaymentBillingData>;
    /**
     * @deprecated Use BillingAPI
     */
    getPaymentBilling(teamId: string): Promise<PaymentBillingData>;
    /**
     * @deprecated Use BillingAPI
     */
    putPaymentPlan(teamId: string, plan: PaymentPlan): Promise<void>;
    /**
     * @deprecated Use BillingAPI
     */
    getPlans(teamId: string): Promise<PaymentStripePlan[]>;
    /**
     * @deprecated
     */
    getCharges(teamId: string): Promise<PaymentStripeCharge[]>;
    /**
     * @deprecated Use BillingAPI
     */
    getInvoices(teamId: string, limit?: number, startAfterInvoiceId?: string): Promise<PaymentStripeInvoices>;
    /**
     * @deprecated Use BillingAPI
     */
    getSupportedCurrencies(teamId: string): Promise<string[]>;
}
