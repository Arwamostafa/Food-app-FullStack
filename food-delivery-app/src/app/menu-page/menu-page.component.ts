import { Component } from '@angular/core';
import { AppSecMenuePageComponent } from '../app-sec-menue-page/app-sec-menue-page.component';
import { MenuProductsMenuePageComponent } from '../menu-products-menue-page/menu-products-menue-page.component';

@Component({
  selector: 'app-menu-page',
  standalone: true,
  imports: [ AppSecMenuePageComponent, MenuProductsMenuePageComponent],
  templateUrl: './menu-page.component.html',
  styleUrl: './menu-page.component.css'
})
export class MenuPageComponent {

}
