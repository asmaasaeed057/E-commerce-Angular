import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/productService/products.service';
import 'rxjs/add/operator/map';
import { ActivatedRoute,Router,Params } from '@angular/router';




@Component({
  selector: 'app-single-page',
  templateUrl: './single-page.component.html',
  styleUrls: ['./single-page.component.scss']
})


export class SinglePageComponent implements OnInit {
  
  public productId :number;
  public productData ;
 
  constructor(
      private service:ProductsService,
      private route: ActivatedRoute ,
      private router:Router) { }

  getProductDetails(productId){
    this.service.getProdectById(productId).subscribe(product =>
    {
      this.productData =product;
    });
  }

  ngOnInit() {
    this.productId= this.route.snapshot.params['id'];
    if (!this.productId) {
      this.router.navigate(["404"]);
    }
    this.getProductDetails(this.productId);
  };
}







