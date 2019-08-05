import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductService } from 'src/app/api/product.service';

@Component({
  selector: 'cr-product-horizontal-list',
  templateUrl: './product-horizontal-list.component.html',
  styleUrls: ['./product-horizontal-list.component.scss']
})
export class ProductHorizontalListComponent implements OnInit {

  @Input() productData: Product;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
  }

  removeProduct(id: number) {
    this.productService.remvoeFromCart(id);
  }

}
