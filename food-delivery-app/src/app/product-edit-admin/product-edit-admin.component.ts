import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-edit-admin',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './product-edit-admin.component.html',
  styleUrls: ['./product-edit-admin.component.css']
})
export class ProductEditAdminComponent implements OnInit {
  product: any = {
    productName: '',
    productPrice: null,
    productSupplier: '',
    productQuantity: null,
    image: '' // will store image URL or file data
  };
  successMessage: string = '';
  errorMessage: string = '';
  isSubmitting: boolean = false;
  selectedFile: File | null = null; // Add this to handle the selected image file

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.loadProduct(productId);
    } else {
      this.errorMessage = 'Product ID is missing.';
    }
  }

  // Load product details based on productId
  loadProduct(id: string): void {
    this.productService.getProductById(id).subscribe(
      (data) => {
        if (data && data._id) {
          this.product = data;
        } else {
          this.errorMessage = 'Invalid product data or missing ID.';
        }
      },
      (error) => {
        this.errorMessage = 'Error loading product data: ' + (error.message || 'Unknown error');
      }
    );
  }

  // Handle file selection for image
  onFileSelect(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  // Update product details with image handling
  updateProduct(): void {
    if (!this.product._id) {
      this.errorMessage = 'Product ID is missing. Cannot update the product.';
      return;
    }

    const formData = new FormData();
    formData.append('productName', this.product.productName);
    formData.append('productPrice', this.product.productPrice);
    formData.append('productSupplier', this.product.productSupplier);
    formData.append('productQuantity', this.product.productQuantity);

    if (this.selectedFile) {
      formData.append('image', this.selectedFile); // Append selected file
    }

    this.isSubmitting = true;
    this.productService.updateProduct(this.product._id, formData).subscribe(
      () => {
        this.successMessage = 'Product updated successfully!';
        this.router.navigate(['/list']);
      },
      (error) => {
        this.errorMessage = 'Error updating product: ' + (error.message || 'Unknown error');
      },
      () => {
        this.isSubmitting = false;
      }
    );
  }
}
// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { ProductService } from '../services/product.service';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-product-edit-admin',
//   standalone: true,
//   imports: [FormsModule, CommonModule],
//   templateUrl: './product-edit-admin.component.html',
//   styleUrls: ['./product-edit-admin.component.css']
// })
// export class ProductEditAdminComponent implements OnInit {
//   product: any = {
//     productName: '',
//     productPrice: null,
//     productSupplier: '',
//     productQuantity: null,
//     image: ''
//   };
//   successMessage: string = '';
//   errorMessage: string = '';
//   isSubmitting: boolean = false; // Flag to manage the submission state

//   constructor(
//     private route: ActivatedRoute,
//     private productService: ProductService,
//     private router: Router
//   ) {}

//   ngOnInit(): void {
//     const productId = this.route.snapshot.paramMap.get('id');
//     console.log('Product ID from route:', productId); // Log the product ID from the route
//     if (productId) {
//       this.loadProduct(productId);
//     } else {
//       this.errorMessage = 'Product ID is missing.';
//     }
//   }
  

//   // Load product details based on productId
//   loadProduct(id: string): void {
//     this.productService.getProductById(id).subscribe(
//       (data) => {
//         console.log('Loaded product data:', data); // Log the loaded product
//         if (data && data._id) {
//           this.product = data;
//         } else {
//           this.errorMessage = 'Invalid product data or missing ID.';
//         }
//       },
//       (error) => {
//         console.error('Error loading product:', error); // Log error
//         this.errorMessage = 'Error loading product data: ' + (error.message || 'Unknown error');
//       }
//     );
//   }
  

//   // Update product details
//   updateProduct(): void {
//     if (!this.product._id) {
//       this.errorMessage = 'Product ID is missing. Cannot update the product.';
//       return;
//     }
  
//     this.isSubmitting = true;
//     console.log('Updating product with ID:', this.product._id); // Log the product ID
//     console.log('Product data to be updated:', this.product); // Log product data being updated
  
//     this.productService.updateProduct(this.product._id, this.product).subscribe(
//       () => {
//         this.successMessage = 'Product updated successfully!';
//         console.log('Product successfully updated.');
//         this.router.navigate(['/list']);
//       },
//       (error) => {
//         console.error('Error updating product:', error); // Log detailed error
//         this.errorMessage = 'Error updating product: ' + (error.message || 'Unknown error');
//       },
//       () => {
//         this.isSubmitting = false;
//       }
//     );
//   }
// }



