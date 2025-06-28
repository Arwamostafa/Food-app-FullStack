import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUPageComponent } from './contact-u-page.component';

describe('ContactUPageComponent', () => {
  let component: ContactUPageComponent;
  let fixture: ComponentFixture<ContactUPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactUPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactUPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
