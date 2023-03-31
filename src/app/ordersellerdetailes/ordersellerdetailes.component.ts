import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from '../models/order.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-ordersellerdetailes',
  templateUrl: './ordersellerdetailes.component.html',
  styleUrls: ['./ordersellerdetailes.component.scss']
})
export class OrdersellerdetailesComponent implements OnInit {

  id!:number
  response!:any
  order!:Order
    constructor(private orderdetailes:UserService,private activeroute: ActivatedRoute,) {
      this.id=this.activeroute.snapshot.params['id'] 
     }
  
    ngOnInit(): void {
      console.log('mennnnnnnnnnnnnnnnnnna')
      //this.profile.store_profile(this.id).subscribe((res)=>{this.response=res;this.store=this.response.Response;console.log(res)})
  this.orderdetailes.seller_order(this.id).subscribe((res)=>{this.response=res;this.order=this.response.Response;console.log(res)})
    }

}
