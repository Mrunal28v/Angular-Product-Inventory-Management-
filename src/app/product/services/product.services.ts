import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: any[] =[
    {
      id: '101',
      name: 'Laptop',
      description: 'A powerful gaming laptop',
      manufacturer: 'Tech Corp',
      price: 1200,
      quantity: 10
    },
    {
      id: '102',
      name: 'Tablet',
      description: 'A powerful gaming laptop',
      manufacturer: 'Tech Corp',
      price: 1400,
      quantity: 50
    },

  ];

  constructor() {
    // Store in localStorage if not already present
    if (!localStorage.getItem('products')) {
      localStorage.setItem('products', JSON.stringify(this.products));
    }
  }

  // addProduct(newProduct: any): void {
  //   let products = JSON.parse(localStorage.getItem('products') || '[]');
  //   products.push(newProduct);
  //   localStorage.setItem('products', JSON.stringify(products));
  // }

  // getProduct(id: string): any {
  //   const products = JSON.parse(localStorage.getItem('products') || '[]');
  //   return products.find((p: any) => p.id === id);
  // }

  // updateProduct(id: string, updatedData: any): void {
  //   let products = JSON.parse(localStorage.getItem('products') || '[]');
  //   products = products.map((p: any) => (p.id === id ? { ...p, ...updatedData } : p));
  //   localStorage.setItem('products', JSON.stringify(products));
  // }

  // deleteProduct()
  // {

  // }

  updateProductS()
  {
    return this.products;
  }

  getProducts() {
    return this.products;
  }

  addProduct(product: any) {
    this.products.push(product);
  }

  deleteProduct(index: number) {
    this.products.splice(index, 1);
  }

}
