import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/models/order.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-rejected-sales',
  templateUrl: './rejected-sales.component.html',
  styleUrls: ['./rejected-sales.component.scss']
})
export class RejectedSalesComponent implements OnInit {

  response!:any
orders?:Order[]
start_d!:string
end_d!:string
id!:number
  constructor(private unpaid_sales:UserService,private activeroute:ActivatedRoute) {
    this.id=this.activeroute.snapshot.params['id']
   }

  ngOnInit(): void {
  this.unpaid_sales.unpaid_orders_store(this.id,this.start_d,this.end_d).subscribe((res)=>{this.response=res;this.orders=this.response.Response.orders.data ;console.log(this.orders)})
  }
  filterorders(){
    this.unpaid_sales.unpaid_orders_store(this.id,this.start_d,this.end_d).subscribe((res)=>{this.response=res;this.orders=this.response.Response.orders.data ;console.log(this.orders)})

  }
  reset(){
    this.start_d=''
    this.end_d=''
  }

}
