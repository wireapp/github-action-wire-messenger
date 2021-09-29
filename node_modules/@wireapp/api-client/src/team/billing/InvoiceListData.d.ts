import { InvoiceData } from '../payment';
export interface InvoiceListData {
    has_more: boolean;
    invoices: InvoiceData[];
}
