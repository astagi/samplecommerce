import { CartElement } from "./cart-element";

export class Cart {
  id: number;
  user: any;
  products: CartElement[];
  n_products: number;
  total: number;
}
