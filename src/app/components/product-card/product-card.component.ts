import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductService } from 'src/app/api/product.service';

@Component({
  selector: 'cr-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() productData: Product;
  @Output() addToCart = new EventEmitter();


  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
  }

  addProduct(product: Product) {
    this.productService.adToCart(product);
  }

}
