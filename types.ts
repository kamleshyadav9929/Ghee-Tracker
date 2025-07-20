
export enum PaymentStatus {
  Pending = 'Pending',
  Partial = 'Partial',
  Paid = 'Paid',
}

export interface Customer {
  id: string;
  name: string;
  phone: string;
  address: string;
}

export interface Order {
  id: string;
  customerId: string;
  date: string; // ISO string
  quantity: number; // in kg or liters
  unit: 'kg' | 'liter';
  pricePerUnit: number;
  totalPrice: number;
  payments: Payment[];
  paymentStatus: PaymentStatus;
  notes?: string;
}

export interface Payment {
  id: string;
  date: string; // ISO string
  amount: number;
}
