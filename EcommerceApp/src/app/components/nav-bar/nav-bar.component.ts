import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shoppingCartService/shopping-cart.service';
import { Item } from 'src/app/models/shoppingCartItem';
import { StreamService } from 'src/app/services/streamService/stream.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})

export class NavBarComponent implements OnInit {
  public items: Item[] = [];
  public totalItems: number = 0;
  name;
  constructor( 
    private cartService: ShoppingCartService,private stream: StreamService) { 
      this.stream.getdata().subscribe((name) => {
        this.name = name;
    });
  }

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
