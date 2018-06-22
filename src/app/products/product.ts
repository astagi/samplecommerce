export class Product {

  constructor(name: string, price: number, description: string, brief_description: string) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.brief_description = brief_description
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
    this.slug = name.toLowerCase().replace(/\s/g, '_');
  }

  _name: string;
  slug: string;
  price: number;
  description: string;
  brief_description: string;
}
