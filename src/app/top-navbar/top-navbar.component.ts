import { Component, OnInit } from '@angular/core';
import { carts } from '../cart';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css']
})
export class TopNavbarComponent implements OnInit {

  cart = carts.length;

  constructor() { }

  ngOnInit(): void {
  }

}
