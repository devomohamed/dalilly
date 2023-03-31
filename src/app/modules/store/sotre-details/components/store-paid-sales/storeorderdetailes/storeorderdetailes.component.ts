import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/models/order.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-storeorderdetailes',
  templateUrl: './storeorderdetailes.component.html',
  styleUrls: ['./storeorderdetailes.component.scss']
})
export class StoreorderdetailesComponent implements OnInit {

  term=''
  id!:number
  response!:any
  order!:Order
    constructor(private orderdetailes:UserService,private activeroute: ActivatedRoute,) {
      this.id=this.activeroute.snapshot.params['id'] 
     }
  

  ngOnInit(): void {
    this.orderdetailes.store_order_detailes(this.activeroute.snapshot.params['store-id'],this.activeroute.snapshot.params['order-id']).subscribe((res)=>{this.response=res; this.order=this.response.Response
   console.log(res)})
  }

}
