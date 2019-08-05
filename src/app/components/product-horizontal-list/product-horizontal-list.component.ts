import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cr-product-horizontal-list',
  templateUrl: './product-horizontal-list.component.html',
  styleUrls: ['./product-horizontal-list.component.scss']
})
export class ProductHorizontalListComponent implements OnInit {

  @Input() productData: Product;
  @Output() removeFormCart = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  removeProduct(id: number) {
    this.removeFormCart.emit(id);
  }

}
