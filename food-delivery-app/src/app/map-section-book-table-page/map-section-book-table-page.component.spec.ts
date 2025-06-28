import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapSectionBookTablePageComponent } from './map-section-book-table-page.component';

describe('MapSectionBookTablePageComponent', () => {
  let component: MapSectionBookTablePageComponent;
  let fixture: ComponentFixture<MapSectionBookTablePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapSectionBookTablePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MapSectionBookTablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
