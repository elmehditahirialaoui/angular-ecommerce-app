import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllproductsComponent } from './components/allproducts/allproducts.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';



@NgModule({
  declarations: [
    AllproductsComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AllproductsComponent,
    ProductDetailsComponent
  ]
})
export class ProductsModule { }
