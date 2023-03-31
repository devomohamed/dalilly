import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/models/order.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-total-sales',
  templateUrl: './total-sales.component.html',
  styleUrls: ['./total-sales.component.scss']
})
export class TotalSalesComponent implements OnInit {

  response!:any
  orders?:Order[]
  start_d!:string
  end_d!:string
  id!:number
    constructor(private total_sales:UserService,private activeroute:ActivatedRoute) {
      this.id=this.activeroute.snapshot.params['id']
     }
  
    ngOnInit(): void {
    this.total_sales.total_sales(this.id,this.start_d,this.end_d).subscribe((res)=>{this.response=res;this.orders=this.response.Response.sales.data ;console.log(this.orders)})
    }
    filterorders(){
      this.total_sales.total_sales(this.id,this.start_d,this.end_d).subscribe((res)=>{this.response=res;this.orders=this.response.Response.sales.data ;console.log(this.orders)})
  
    }
    reset(){
      this.start_d=''
      this.end_d=''
    }
  

}
