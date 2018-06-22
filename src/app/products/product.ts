export class Product {

  constructor(name: string, price: number, description: string, brief_description: string) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.brief_description = brief_description
  }

  name: string;
  price: number;
  description: string;
  brief_description: string;
}
