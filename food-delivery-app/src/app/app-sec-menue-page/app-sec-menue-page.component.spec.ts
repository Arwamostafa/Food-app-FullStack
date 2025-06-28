import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSecMenuePageComponent } from './app-sec-menue-page.component';

describe('AppSecMenuePageComponent', () => {
  let component: AppSecMenuePageComponent;
  let fixture: ComponentFixture<AppSecMenuePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppSecMenuePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppSecMenuePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
