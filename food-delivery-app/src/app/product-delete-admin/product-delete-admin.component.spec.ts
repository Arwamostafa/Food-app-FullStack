import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDeleteAdminComponent } from './product-delete-admin.component';

describe('ProductDeleteAdminComponent', () => {
  let component: ProductDeleteAdminComponent;
  let fixture: ComponentFixture<ProductDeleteAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDeleteAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductDeleteAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
