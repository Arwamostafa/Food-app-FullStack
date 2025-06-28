import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookTablePageComponent } from './book-table-page.component';

describe('BookTablePageComponent', () => {
  let component: BookTablePageComponent;
  let fixture: ComponentFixture<BookTablePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookTablePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookTablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
