import { Component } from '@angular/core';
import { BlogSectionComponent } from '../blog-section/blog-section.component';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { MenuSectionComponent } from '../menu-section/menu-section.component';
import { ServicesSectionComponent } from '../services-section/services-section.component';

import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { HealthyFoodComponent } from '../healthy-food/healthy-food.component';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [BlogSectionComponent,
    HeroSectionComponent,
    MenuSectionComponent,
    ServicesSectionComponent,
    
    NavbarComponent,
    FooterComponent,
    HealthyFoodComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
