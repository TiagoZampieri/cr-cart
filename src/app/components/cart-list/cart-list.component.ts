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
  calc;
  cartSubscribe;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.cartProducts$ = this.productService.getCartProducts();
  }

  removeProduct(id: number) {
    this.removeFromCart.emit(id);
  }

  calcValue() {
    let total = 10.00;
    this.calc = this.productService.getCartProducts().subscribe({
      next(el: Product[]) {
        el.forEach(prod => {
          total += prod.price;
        });
      }
    });
    return total;
  }

}
