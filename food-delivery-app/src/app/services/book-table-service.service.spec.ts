import { TestBed } from '@angular/core/testing';

import { BookTableServiceService } from './book-table-service.service';

describe('BookTableServiceService', () => {
  let service: BookTableServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookTableServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
