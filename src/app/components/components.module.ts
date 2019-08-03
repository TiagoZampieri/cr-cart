import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { ProductHorizontalListComponent } from './product-horizontal-list/product-horizontal-list.component';

@NgModule({
  declarations: [
    ProductCardComponent,
    CartListComponent,
    ProductHorizontalListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductCardComponent,
    CartListComponent
  ]
})
export class ComponentsModule { }
