// src/app/product-delete-admin/product-delete-admin.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service'; // Adjust the import based on your file structure
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-product-delete-admin',
  standalone: true,
  imports: [CommonModule], // Add CommonModule here
  templateUrl: './product-delete-admin.component.html',
  styleUrls: ['./product-delete-admin.component.css']
})
export class ProductDeleteAdminComponent implements OnInit {
  product: any;  // You may want to define a more specific type
  successMessage: string = '';
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private productService: ProductService
  ) {}

  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id'); // Get the product ID from the route
    this.getProduct(productId); // Fetch the product details
  }

  getProduct(id: string | null) {
    if (id) {
      this.productService.getProductById(id).subscribe(
        (response) => {
          this.product = response; // Assuming response contains the product data
        },
        (error) => {
          this.errorMessage = 'Error fetching product details.';
        }
      );
    }
  }

  confirmDelete() {
    if (this.product) {
      this.productService.deleteProduct(this.product._id).subscribe(
        () => {
          this.successMessage = 'Product deleted successfully.';
          setTimeout(() => {
            this.router.navigate(['/list']);
          }, 2000); // Optional: wait for 2 seconds before navigating
        },
        (error) => {
          this.errorMessage = 'Error deleting product.';
        }
      );
    }
  }
}

