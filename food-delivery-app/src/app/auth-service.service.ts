import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:3005/auth'; // Define your base URL

  constructor(private http: HttpClient) {}

  // Updated login method to handle token and role
  login(username: string, password: string): Observable<any> {
    return this.http.post<{ token: string; role: string }>(`${this.baseUrl}/login`, { username, password }).pipe(
      tap((response) => {
        // Store the token and role in local storage upon successful login
        localStorage.setItem('token', response.token);
        localStorage.setItem('role', response.role);
        console.log('Role stored:', response.role); // Log role for debugging
      })
    );
  }

  // Register method remains unchanged
  register(username: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, { username, password });
  }
}


// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthService {
//   private baseUrl = 'http://localhost:3001/auth'; // Define your base URL

//   constructor(private http: HttpClient) {}

//   login(username: string, password: string): Observable<any> {
//     return this.http.post(`${this.baseUrl}/login`, { username, password });
//   }

//   register(username: string, password: string): Observable<any> {
//     return this.http.post(`${this.baseUrl}/register`, { username, password });
//   }



  // isAdmin(): boolean {
  //   if (typeof localStorage !== 'undefined') { // Check if localStorage is available
  //     const userRole = localStorage.getItem('userRole'); // Assume userRole is stored in localStorage
  //     return userRole === 'admin';
  //   }
  //   return false; // Default to false if localStorage is not available
  // }
// }

