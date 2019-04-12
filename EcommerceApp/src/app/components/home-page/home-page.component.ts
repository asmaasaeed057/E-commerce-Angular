import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StreamService } from 'src/app/services/streamService/stream.service';
import { ProductsService } from 'src/app/services/productService/products.service';
import { IProducts } from 'src/app/models/products';
import { ShoppingCartService } from 'src/app/services/shoppingCartService/shopping-cart.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  name;
  public products  = [];
 product:IProducts[];
  constructor(
    private router:Router, 
    private stream: StreamService ,
    private productservice: ProductsService ,
    private cartservace: ShoppingCartService)
    
    { 
    this.stream.getdata().subscribe((name) => {
      this.name = name;
    });
    
  }




  ngOnInit() {
    this.productservice.getProducts().subscribe((data)=>{
      console.log(Array.isArray(data));
      this.products =data;
    });
    this.product = this.productservice.findAll();
  }  

  onSelect(product){
    this.router.navigate(['/product',product.id]);
  }

  onSelectCart(product){
    this.router.navigate(['/cart',product.id]);
  }

  addToCart(id) {
    this.cartservace.addItem(id);
  }
  
  addToWishlist(id){
    this.cartservace.addItem(id);
  }
  
}
