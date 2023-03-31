import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/models/order.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-paid-sales',
  templateUrl: './paid-sales.component.html',
  styleUrls: ['./paid-sales.component.scss']
})
export class PaidSalesComponent implements OnInit {
  @Output()count_paid_sales =new EventEmitter<number>();
response!:any
orders?:Order[]
start_d!:string
end_d!:string
page=1
pages!:number[]
  constructor(private router:Router,private paid_sales:UserService) { }

  ngOnInit(): void {
    this.pages=[]
  this.paid_sales.paid_orders(this.page).subscribe((res)=>{this.response=res;this.orders=this.response.Response.orders.data ;console.log(res)

    for(let i =0;i<  this.response.Response.orders.last_page;i++){
      this.pages.push(i+1)
    }
  })
  }
  paginate(page:number){
    document.getElementById('load')!.style.display='block'

    this.page=page
    this.paid_sales.paid_orders(this.page).subscribe((res)=>{this.response=res;this.orders=this.response.Response.orders.data ;console.log(this.orders)
      document.getElementById('load')!.style.display='none'

      // for(let i =0;i<  this.response.Response.orders.last_page;i++){
      //   this.pages.push(i+1)
      // }
    })
  }
  filterorders(){
    this.paid_sales.paid_orders(this.page,this.start_d,this.end_d).subscribe((res)=>{this.response=res;this.orders=this.response.Response.orders.data ;console.log(this.orders)})

  }
  reset(){
    this.start_d=''
    this.end_d=''
  }
  details(order_id:number){
    this.router.navigateByUrl(`/me/profile/seller-order/${order_id}`)

  }


}
