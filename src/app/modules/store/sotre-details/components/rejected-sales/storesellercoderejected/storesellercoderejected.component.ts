import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/models/order.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-storesellercoderejected',
  templateUrl: './storesellercoderejected.component.html',
  styleUrls: ['./storesellercoderejected.component.scss']
})
export class StoresellercoderejectedComponent implements OnInit {

  response!:any
  orders!:Order[]
  order!:Order
  i!:number
  id!:number
  constructor(private paid_sales:UserService,private activeroute:ActivatedRoute,private router:Router) {
    this.id=this.activeroute.snapshot.params['id']
    this.i=this.activeroute.snapshot.params['index']

   }

  ngOnInit(): void {
  this.paid_sales.unpaid_orders_store(this.id).subscribe((res)=>{
    this.response=res;
    this.orders=this.response.Response.orders.data ;
    this.order=this.orders[this.i]
    console.log(this.order)})
  }
  copyit(){
    const cb = navigator.clipboard;
    const paragraph = document.getElementById('p')!;
    cb.writeText(paragraph.innerText)
  
  }


}
