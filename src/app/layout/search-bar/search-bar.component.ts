import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { notification } from 'src/app/models/notification.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
response!:any
counter_noty=0
counter_order=0
counter_cart=0
i!:notification
notifications!:notification[]
orders_notification!:notification[]
  constructor(private notifserve:UserService,private route:Router) { }

  ngOnInit(): void {
    this.notification_offer()
    this.notification_order()
  }
 notification_offer(){
  this.notifserve.allnotification('offer').subscribe((res)=>{
    this.response=res
    this.notifications=this.response.Response.data
    if(this.notifications){
      for(this.i of this.notifications){
             if(this.i.is_open==0)
             this.counter_noty++
      }
    }
    
  })
 }
 notification_order(){
  this.notifserve.allnotification('order').subscribe((res)=>{
    this.response=res
    this.orders_notification=this.response.Response.data
    if(this.orders_notification){
      for(this.i of this.orders_notification){
             if(this.i.is_open==0)
             this.counter_order++
      }
    }
    
  })
 }
 set_as_open(id:number,is_open:number,order_id:string){
 if(is_open==0){
   this.notifserve.set_as_seen(id).subscribe((res)=>{console.log(res)})
 }
//  if(order_id)
console.log(order_id)
 this.route.navigateByUrl(`/home/me/profile/saledetailes/237`)
 }

}