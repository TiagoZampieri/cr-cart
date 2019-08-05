import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cr-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

  @Input() cartProducts: Product[];
  @Output() removeFromCart = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  removeProduct(id: number) {
    this.removeFromCart.emit(id);
  }

}
