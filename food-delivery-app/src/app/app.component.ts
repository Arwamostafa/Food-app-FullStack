import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BlogSectionComponent } from './blog-section/blog-section.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { MenuSectionComponent } from './menu-section/menu-section.component';
import { ServicesSectionComponent } from './services-section/services-section.component';
import { ProductAddAdminComponent } from './product-add-admin/product-add-admin.component';
import { ProductDeleteAdminComponent } from './product-delete-admin/product-delete-admin.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductEditAdminComponent } from './product-edit-admin/product-edit-admin.component';
import { RegisterComponent } from './register/register.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FooterComponent,
    BlogSectionComponent,
    HeroSectionComponent,
    MenuSectionComponent,
    ServicesSectionComponent,
    NavbarComponent,
    ProductAddAdminComponent,
    ProductDeleteAdminComponent,
    ProductListComponent,
    ProductEditAdminComponent,
    RegisterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'food-delivery-app';
}


