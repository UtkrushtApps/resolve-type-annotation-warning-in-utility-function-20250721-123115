import { Invoice } from '../types/invoice';

const invoices: Invoice[] = [
  { id: 1, amount: 150, customer: 'ACME Corp' },
  { id: 2, amount: 320, customer: 'Globex', discountCode: 'save10' },
  { id: 3, amount: 120, customer: 'Initech' },
  { id: 4, amount: 780, customer: 'Hooli', discountCode: 'VIP20' },
  { id: 5, amount: 240, customer: 'Umbrella Corp' },
];

export default invoices;
