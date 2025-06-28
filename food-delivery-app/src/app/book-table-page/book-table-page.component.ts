import { Component } from '@angular/core';
import { BookTableService } from './../services/book-table-service.service';

@Component({
  selector: 'app-book-table-page',
  templateUrl: './book-table-page.component.html',
  styleUrls: ['./book-table-page.component.css']
})
export class BookTablePageComponent {

  constructor(private bookTableService: BookTableService) {}

  // Handle form submission
  onSubmit(form: any) {
    this.bookTableService.bookTable(form.value).subscribe(
      response => {
        console.log('Table booked successfully', response);
      },
      error => {
        console.error('Error booking table', error);
      }
    );
  }
}

