import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-store-product-passive-ads',
  templateUrl: './store-product-passive-ads.component.html',
  styleUrls: ['./store-product-passive-ads.component.scss']
})
export class StoreProductPassiveAdsComponent implements OnInit {

  flag=0
  term=''
  id!:number
  response!:any
  products!:Product[]
    constructor(private productservice:UserService,private activeroute:ActivatedRoute) {
      this.id=this.activeroute.snapshot.params['id']
     }
  
    ngOnInit(): void {
      this.productservice.products(this.id).subscribe((res)=>{this.response=res;this.products=this.response.Response.passive.data})
      
    }
    shrink(){
      this.flag=0
        }
       spread(){
          this.flag=1
            }
  
  

}
