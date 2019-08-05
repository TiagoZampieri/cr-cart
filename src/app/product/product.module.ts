import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [ProductListComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
