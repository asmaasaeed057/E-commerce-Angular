import { Injectable } from '@angular/core';
import { Item } from 'src/app/models/shoppingCartItem';
import { ProductsService } from 'src/app/services/productService/products.service';
import { ActivatedRoute,Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class WishListService {
  private items:Item[]=[];
  constructor(
    private productservice:ProductsService,
    private router: Router) { }

    TotalItems(): number {
      let totalItems: number = 0;
      let cart = JSON.parse(localStorage.getItem('cart'));
      if (cart) {
          var items={
            fun:function (item: Item) { 
            totalItems += item.quantity;
            }
          }
      cart.map(items.fun);
      }
      return totalItems;
    }


  removeItem(id: string): void {
      let cart: any = JSON.parse(localStorage.getItem('cart'));
        var items={
          fun:function(item: Item){
            if (item.product.id == id) {
                if (item.quantity <= 1) {
                  cart.splice(item, 1);
                }
                else 
                {
                  item.quantity -= 1;
                }
              }
            }
          }
      cart.map(items.fun);
      localStorage.setItem("cart", JSON.stringify(cart));
  }

  loadWishList(): Item[] {
    this.items = [];
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (cart) {
      this.items = cart;
    }
    return this.items;
  }

  addItem(id: string): void {
    let cart: any ;
    cart= JSON.parse(localStorage.getItem('cart'));
    if (id) {
      var item: Item = {
        product: this.productservice.findOne(id),
        quantity: 1
      };
      
      if (cart==null || cart.length==null) {
        cart.push(item);
      } else {
        var IN: boolean = false;
        var items={
          fun:function(item: Item){
            if (item.product.id == id)
              {
                IN = true;
                item.quantity += 1;
              }
            }
        }
        cart.map(items.fun);
        if (!IN) {
          cart.push(item);
        }
      }
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }
}
