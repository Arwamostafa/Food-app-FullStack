import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { BookTablePageComponent } from './book-table-page/book-table-page.component';
import { ContactUPageComponent } from './contact-u-page/contact-u-page.component';
import { ProductAddAdminComponent } from './product-add-admin/product-add-admin.component';
import { ProductDeleteAdminComponent } from './product-delete-admin/product-delete-admin.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductEditAdminComponent } from './product-edit-admin/product-edit-admin.component';
import { LoginComponent } from './login/login.component'; // Import your login component
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to login as the main page
  { path: 'login', component: LoginComponent }, // Route for login
  { path: 'register', component: RegisterComponent }, // Route for login
  { path: 'home', component: HomePageComponent }, // Route for home
  { path: 'menu', component: MenuPageComponent },
  { path: 'book', component: BookTablePageComponent },
  { path: 'contact', component: ContactUPageComponent },
  { path: 'add', component: ProductAddAdminComponent },
  { path: 'list', component: ProductListComponent },
  { path: 'list/delete/:id', component: ProductDeleteAdminComponent },
  { path: 'list/edit/:id', component: ProductEditAdminComponent },
  { path: '**', redirectTo: '/login' }  // Redirect to login for unknown paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
