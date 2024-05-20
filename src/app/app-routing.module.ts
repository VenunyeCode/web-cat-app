import { NgModule } from '@angular/core';
import { RouterModule, Routes, RouterLink, RouterLinkActive } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';

const routes: Routes = [
   {path : "", component : HomeComponent},
   {path: "products", component: ProductsComponent},
   {path: "newProduct", component : ProductAddComponent},
   {path : "editProduct/:id", component : ProductEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterLink, RouterLinkActive],
  exports: [RouterModule]
})
export class AppRoutingModule { }
