import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Import HttpClient
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookTableService {

  private apiUrl = 'http://localhost:3005/bookTable';  // Backend API URL

  constructor(private http: HttpClient) { }

  // Method to send booking data to the backend
  bookTable(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}

