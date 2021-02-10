
export interface Document {
    id?: number;
    name?: string;
    pendingPayment?: number;
    dateEmit?: string | Date;
    dateIssue?: string | Date;
    status?: string;
    invoice_url?: string;

}