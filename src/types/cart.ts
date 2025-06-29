import type { Product } from "./product";

export interface Cart {
  id: number;
  userId: number;
  date: string;
  products: CProduct[];
  __v: number;
}

interface CProduct {
  productId: number;
  quantity: number;
}

export type CartProduct = Product & {
  quantity: number;
};
