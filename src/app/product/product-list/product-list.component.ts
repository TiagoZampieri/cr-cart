import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/api/product.service';

@Component({
  selector: 'cr-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products$: Product[];
  cartProducts: Product[] = [];

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.products$ = this.productService.getProducts();
  }

  removeFromCart(id: number) {
  }

}
