import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms'; 
import { ProductService } from '../services/product.service'; // Adjust the path as necessary
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-product-add-admin',
  standalone: true,
  templateUrl: './product-add-admin.component.html',
  styleUrls: ['./product-add-admin.component.css'],
  imports: [ReactiveFormsModule, CommonModule], // Add CommonModule here
})
export class ProductAddAdminComponent {
  productForm = this.fb.group({
    productName: ['', Validators.required],
    productPrice: ['', [Validators.required, Validators.min(0)]],
    productSupplier: ['', Validators.required],
    productQuantity: ['', [Validators.required, Validators.min(1)]],
    image: ['', Validators.required],
  });

  successMessage: string | null = null; // Add success message variable

  constructor(private fb: FormBuilder, private productService: ProductService) {}

  onSubmit() {
    if (this.productForm.valid) {
      const productData = this.productForm.value;
      this.productService.addProduct(productData).subscribe(
        response => {
          console.log('Product added successfully', response);
          this.successMessage = 'Product added successfully!'; // Set success message
          this.productForm.reset(); // Reset the form after submission

          // Clear the message after a short delay
          setTimeout(() => {
            this.successMessage = null; // Clear message after 3 seconds
          }, 3000);
        },
        error => {
          console.error('Error adding product', error);
          this.successMessage = null; // Clear success message if there's an error
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
}




// import { Component } from '@angular/core';
// import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms'; 
// import { ProductService } from '../services/product.service'; // Adjust the path as necessary

// @Component({
//   selector: 'app-product-add-admin',
//   standalone: true,
//   templateUrl: './product-add-admin.component.html',
//   styleUrls: ['./product-add-admin.component.css'],
//   imports: [ReactiveFormsModule],
// })
// export class ProductAddAdminComponent {
//   productForm = this.fb.group({
//     productName: ['', Validators.required],
//     productPrice: ['', [Validators.required, Validators.min(0)]],
//     productSupplier: ['', Validators.required],
//     productQuantity: ['', [Validators.required, Validators.min(1)]],
//     image: ['', Validators.required],
//   });

//   constructor(private fb: FormBuilder, private productService: ProductService) {}

//   onSubmit() {
//     if (this.productForm.valid) {
//       const productData = this.productForm.value;
//       this.productService.addProduct(productData).subscribe(
//         response => {
//           console.log('Product added successfully', response);
//           this.productForm.reset(); // Reset the form after submission
//         },
//         error => {
//           console.error('Error adding product', error);
//         }
//       );
//     } else {
//       console.log('Form is invalid');
//     }
//   }
// }
