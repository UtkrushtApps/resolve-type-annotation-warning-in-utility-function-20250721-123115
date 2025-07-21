import { Invoice } from './types/invoice';
import invoices from './data/invoices';

function processInvoices(invoiceList: Invoice[]): void {
  let total = 0;
  invoiceList.forEach((invoice) => {
    total += invoice.amount;
    if (invoice.discountCode) {
      console.log(`Invoice #${invoice.id}: Discount code: ${invoice.discountCode.toUpperCase()}`);
    } else {
      console.log(`Invoice #${invoice.id}: No discount code applied.`);
    }
  });
  console.log(`Total amount for all invoices: $${total}`);
}

processInvoices(invoices);
