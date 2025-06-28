import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSectionBookTablePageComponent } from './header-section-book-table-page.component';

describe('HeaderSectionBookTablePageComponent', () => {
  let component: HeaderSectionBookTablePageComponent;
  let fixture: ComponentFixture<HeaderSectionBookTablePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderSectionBookTablePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderSectionBookTablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
