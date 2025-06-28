import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAddAdminComponent } from './product-add-admin.component';

describe('ProductAddAdminComponent', () => {
  let component: ProductAddAdminComponent;
  let fixture: ComponentFixture<ProductAddAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductAddAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductAddAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
