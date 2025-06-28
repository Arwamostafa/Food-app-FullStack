// src/app/models/product.interface.ts

export interface Product {
    _id: string; // Assuming you have an ID for each product
    productName: string;
    productPrice: number;
    productSupplier: string;
    productQuantity: number;
    image: string;
  }
  