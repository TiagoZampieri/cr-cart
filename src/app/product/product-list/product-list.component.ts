import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cr-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products = [
    {
      id: 312,
      name: 'Super Mario Odyssey',
      price: 197.88,
      score: 100,
      image: 'assets/games-thumbs/super-mario-odyssey.png'
    },
    {
      id: 201,
      name: 'Call Of Duty Infinite Warfare',
      price: 49.99,
      score: 80,
      image: 'assets/games-thumbs/call-of-duty-infinite-warfare.png'
    },
    {
      id: 102,
      name: 'The Witcher III Wild Hunt',
      price: 119.5,
      score: 250,
      image: 'assets/games-thumbs/the-witcher-iii-wild-hunt.png'
    },
    {
      id: 99,
      name: 'Call Of Duty WWII',
      price: 249.99,
      score: 205,
      image: 'assets/games-thumbs/call-of-duty-wwii.png'
    },
    {
      id: 12,
      name: 'Mortal Kombat XL',
      price: 69.99,
      score: 150,
      image: 'assets/games-thumbs/mortal-kombat-xl.png'
    },
    {
      id: 74,
      name: 'Shards of Darkness',
      price: 71.94,
      score: 400,
      image: 'assets/games-thumbs/shards-of-darkness.png'
    },
    {
      id: 31,
      name: 'Terra Média: Sombras de Mordor',
      price: 79.99,
      score: 50,
      image: 'assets/games-thumbs/terra-media-sombras-de-mordor.png'
    },
    {
      id: 420,
      name: 'FIFA 18',
      price: 195.39,
      score: 325,
      image: 'assets/games-thumbs/fifa-18.png'
    },
    {
      id: 501,
      name: 'Horizon Zero Dawn',
      price: 115.8,
      score: 290,
      image: 'assets/games-thumbs/horizon-zero-dawn.png'
    }
  ];
  cartProducts: Product[] = [];

  constructor() { }

  ngOnInit() {
  }

  addToCart(product: Product) {
    this.cartProducts.push(product);
  }

  removeFromCart(id: number) {
    const item = this.cartProducts.findIndex(el => {
      return el.id === id;
    });

    this.cartProducts.splice(item, 1);
  }

}
