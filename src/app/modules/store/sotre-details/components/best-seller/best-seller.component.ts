import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-best-saller',
  templateUrl: './best-seller.component.html',
  styleUrls: ['./best-seller.component.scss']
})
export class BestSellerComponent implements OnInit {
id!:number
response!:any
products!:Product[]
term=''
flag=0
  constructor(private bestseller:UserService ,private activeroute:ActivatedRoute) {
      this.id=this.activeroute.snapshot.params['id']
   }

  ngOnInit(): void {
    this.bestseller.best_seller(this.id).subscribe((res)=>{this.response=res;this.products=this.response.Response.products.data; console.log(this.products)})
  }
  shrink(){
    this.flag=0
      }
     spread(){
        this.flag=1
          }
    

}
