import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WishListService } from 'src/app/services/wishListService/wish-list.service';
import { ProductsService } from 'src/app/services/productService/products.service';
import { IProducts } from 'src/app/models/products';
import { Item } from 'src/app/models/shoppingCartItem';


@Component({
  selector: 'app-wish-list-counter',
  templateUrl: './wish-list-counter.component.html',
  styleUrls: ['./wish-list-counter.component.scss']
})
export class WishListCounterComponent implements OnInit {
  public items:Item[]=[];
  public totalItems:number=0;
  constructor(
    private router:Router,
    private wishlistservice:WishListService,
    private productservice:ProductsService
  ) { }

  ngOnInit() {
    this.items = this.wishlistservice.loadWishList();

	this.totalItems = this.wishlistservice.TotalItems(); 
  }

  removeFromWishList(id: string): void {
    this.wishlistservice.removeItem(id);
    this.items = this.wishlistservice.loadWishList();
    this.totalItems = this.wishlistservice.TotalItems();
    
  }
}
