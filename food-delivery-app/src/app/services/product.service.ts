import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:3005/products'; // The base URL of the backend

  constructor(private http: HttpClient) {}

  // Get all products
  getAllProducts(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(
      catchError(this.handleError) // Handle error
    );
  }

  // Get a single product
  getProductById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError) // Handle error
    );
  }

  // Add a new product
  addProduct(productData: any): Observable<any> {
    return this.http.post(this.apiUrl, productData).pipe(
      catchError(this.handleError) // Handle error
    );
  }

  // Update a product
  updateProduct(id: string, productData: FormData): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${id}`, productData).pipe(
      catchError(this.handleError) // Handle error
    );
  }



  // Delete a product
  deleteProduct(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError) // Handle error
    );
  }

  // Error handling method
  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error); // Log to console instead
    return throwError(() => new Error('Something went wrong; please try again later.'));
  }
}
