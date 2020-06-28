import { Component, OnInit } from '@angular/core';

import { products } from '../product';
import { carts } from '../cart';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


  products = products;

  constructor() { }

  ngOnInit(): void {
    
  }
  onClickMe(product) {
    carts.push(product);
    console.log(carts.length);
  }

}
