// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { ProductService } from '../services/product.service'; // Adjust the path as necessary
// import { CommonModule } from '@angular/common';
// @Component({
  import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { CommonModule } from '@angular/common';
import { catchError } from 'rxjs/operators'; // Import operators for error handling
import { of } from 'rxjs'; // Import 'of' for creating observables

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  errorMessage: string = ''; // To store error messages

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getAllProducts().pipe(
      catchError((error) => {
        console.error('Error fetching product list', error);
        this.errorMessage = 'Failed to load products. Please try again later.'; // User-friendly error message
        return of([]); // Return an empty array on error
      })
    ).subscribe((response) => {
      this.products = response; // Assuming response contains the list of products
    });
  }

  goToEditProduct(productId: string) {
    this.router.navigate(['/list/edit', productId]);
  }

  goToDeleteProduct(productId: string) {
    this.router.navigate(['/list/delete', productId]);
  }
}
