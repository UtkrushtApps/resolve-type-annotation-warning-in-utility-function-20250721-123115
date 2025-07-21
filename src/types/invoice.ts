export interface Invoice {
  id: number;
  amount: number;
  customer: string;
  discountCode?: string; // Optional property
}
