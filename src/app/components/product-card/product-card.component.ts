import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cr-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() productData: Product;
  @Output() addToCart = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  addProduct(product: Product) {
    this.addToCart.emit(product);
  }

}
