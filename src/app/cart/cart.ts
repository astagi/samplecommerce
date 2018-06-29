import { CartElement } from "./cart-element";

export class Cart {
  id: number;
  cart_items_count: number;
  user: any;
  products: CartElement[];
}
