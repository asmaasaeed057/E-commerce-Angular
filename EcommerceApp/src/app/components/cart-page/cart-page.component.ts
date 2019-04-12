import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shoppingCartService/shopping-cart.service';
import { Item } from 'src/app/models/shoppingCartItem';



@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
	public items: Item[] = [];
	public totalItems: number = 0;
	public totalprice:number;
  constructor(private cartService: ShoppingCartService) { }

ngOnInit() {
  this.items = this.cartService.loadCart();
  this.totalItems = this.cartService.TotalItems();  
}

removeFromCart(id: string): void {
    this.cartService.removeItem(id);
		this.items = this.cartService.loadCart();
    this.totalItems = this.cartService.TotalItems();
    }
}

