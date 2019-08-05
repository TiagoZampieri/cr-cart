import { map } from 'rxjs/operators';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductService } from 'src/app/api/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'cr-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

  @Output() removeFromCart = new EventEmitter();

  cartProducts$: Observable<Product[]>;
  cartSubscribe;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.cartProducts$ = this.productService.getCartProducts();
    this.calcValue();

  }

  removeProduct(id: number) {
    this.removeFromCart.emit(id);
  }

  calcValue() {
    let calcTotal = 0;
    this.cartProducts$.subscribe(res => {
      res.map(prod => calcTotal += prod.price);
      console.log('total ->', calcTotal);
    });

    return calcTotal;
  }

}
