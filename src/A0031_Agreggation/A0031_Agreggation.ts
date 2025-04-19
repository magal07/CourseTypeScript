export class ShopCart {
  private readonly products: Product[] = [];

  insertProducts(...products: []): void {
    for (const product of products) {
      this.products.push(product);
    }
  }
  quantityProducts(): number {
    return this.products.length;
  }
  totalValue(): number {
    return this.products.reduce((sum, product) => sum + product.price, 0);
  }
}

export class Product {
  constructor(
    public name: string,
    public price: number,
  ) {}
}

// const product1 = new Product('Short', 49.9);
// const product2 = new Product('Pend', 9.9);
// const product3 = new Product('Pendrive', 4.9);

const shopCart = new ShopCart();
// shopCart.insertProducts(product1, product2, product3);
console.log(shopCart.totalValue());
console.log(shopCart.quantityProducts());
