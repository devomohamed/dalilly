import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-store-product-expired-ads',
  templateUrl: './store-product-expired-ads.component.html',
  styleUrls: ['./store-product-expired-ads.component.scss']
})
export class StoreProductExpiredAdsComponent implements OnInit {

  flag=0
term=''
id!:number
response!:any
products!:Product[]
  constructor(private productservice:UserService,private activeroute:ActivatedRoute) {
    this.id=this.activeroute.snapshot.params['id']
   }

  ngOnInit(): void {
    this.productservice.products(this.id).subscribe((res)=>{this.response=res;this.products=this.response.Response.expired.data})
    
  }
  shrink(){
    this.flag=0
      }
     spread(){
        this.flag=1
          }



}
