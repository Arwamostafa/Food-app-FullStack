import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { ProductService } from '../services/product.service'; // Adjust the import based on your file structure

@Component({
  selector: 'app-menu-products-menue-page',
  standalone: true,
  imports: [CommonModule], // Add CommonModule here
  templateUrl: './menu-products-menue-page.component.html',
  styleUrls: ['./menu-products-menue-page.component.css']
})
export class MenuProductsMenuePageComponent implements OnInit {
  products: any[] = []; // Array to hold product data

  constructor(private productService: ProductService) {} // Inject ProductService

  ngOnInit() {
    this.getAllProducts(); // Fetch products when component initializes
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe(
      (response) => {
        this.products = response; // Assuming response contains the list of products
      },
      (error) => {
        console.error('Error fetching product list', error);
      }
    );
  }
}



