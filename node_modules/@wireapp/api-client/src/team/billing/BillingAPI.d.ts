import type { HttpClient } from '../../http';
import { BillingData } from './BillingInfo';
import { BillingTeamData } from './BillingTeamData';
import { CardData } from './CardData';
import { InvoiceListData } from './InvoiceListData';
import { Coupon, InvoiceUpcomingData } from './InvoiceUpcomingData';
import { PlanData, PlanInterval } from './PlanData';
import { SupportedCurrency } from './SupportedCurrency';
export declare class BillingAPI {
    private readonly client;
    static readonly DEFAULT_INVOICES_CHUNK_SIZE = 10;
    constructor(client: HttpClient);
    static readonly URL: {
        BILLING: string;
        CURRENCIES: string;
        INFO: string;
        CARD: string;
        COUPON: string;
        INVOICES: string;
        PLAN: string;
        LIST: string;
        TEAMS: string;
        TEAM: string;
        UPCOMING: string;
    };
    getBillingTeam(teamId: string): Promise<BillingTeamData>;
    putBillingInfo(teamId: string, billingInfo: BillingData): Promise<BillingData>;
    getBillingInfo(teamId: string): Promise<BillingData>;
    putCard(teamId: string, stripeToken: string): Promise<CardData>;
    getCard(teamId: string): Promise<CardData>;
    postCoupon(teamId: string, coupon: string): Promise<Coupon>;
    deleteCoupon(teamId: string, coupon: string): Promise<void>;
    getCurrentPlan(teamId: string): Promise<PlanData>;
    putPlan(teamId: string, planId: string): Promise<PlanData>;
    getAvailablePlans(teamId: string, filter: {
        currency?: SupportedCurrency;
        interval?: PlanInterval;
    }): Promise<PlanData[]>;
    getSupportedCurrencies(teamId: string): Promise<SupportedCurrency[]>;
    getUpcomingInvoice(teamId: string): Promise<InvoiceUpcomingData>;
    getInvoices(teamId: string, limit?: number, startAfterInvoiceId?: string): Promise<InvoiceListData>;
}
