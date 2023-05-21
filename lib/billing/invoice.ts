import type { Invoice, InvoiceStatus } from "@/types";
import { formatCurrency } from "@/lib/format";

/** Tailwind colour class for an invoice status. */
export function invoiceStatusClass(status: InvoiceStatus): string {
  switch (status) {
    case "paid":
      return "text-emerald-500";
    case "pending":
      return "text-amber-500";
    case "failed":
      return "text-destructive";
  }
}

/** Sum the `amount` of all invoices with `status === "paid"`. */
export function totalPaid(invoices: ReadonlyArray<Invoice>, currency: string = "USD"): string {
  const total = invoices.reduce(
    (sum, invoice) => (invoice.status === "paid" ? sum + invoice.amount : sum),
    0
  );
  return formatCurrency(total, currency);
}
