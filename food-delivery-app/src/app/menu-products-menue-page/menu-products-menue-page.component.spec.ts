import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuProductsMenuePageComponent } from './menu-products-menue-page.component';

describe('MenuProductsMenuePageComponent', () => {
  let component: MenuProductsMenuePageComponent;
  let fixture: ComponentFixture<MenuProductsMenuePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuProductsMenuePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuProductsMenuePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
