import { SupportedCurrency } from './SupportedCurrency';
export declare enum PlanInterval {
    MONTH = "month",
    YEAR = "year"
}
export interface PlanData {
    amount: number;
    custom: boolean;
    id: string;
    interval: PlanInterval;
    currency: SupportedCurrency;
    calculatedPriceEstimate: number;
    name: string;
}
