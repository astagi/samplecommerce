import { Product } from "../products/product";

export class Cart {
  id: number;
  cart_items_count: number;
  user: any;
  products: Product[];
}
