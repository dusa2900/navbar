import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductOneComponent } from './components/product-one/product-one.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {path:"",redirectTo:"products",pathMatch:"full"},
  {path:"products",component:ProductsComponent},
  {path:"products/:id",component:ProductOneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
