import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  constructor(private ordersserve:UserService ) {this.orders=[] }
response!:any
orders!:Order[]
is_complete=0
page=1
pages?:number[]

  ngOnInit(): void {
   
    this.ordersserve.myorders(this.is_complete,1).subscribe((res)=>{console.log(res);this.response=res;this.orders=this.response.Response.data;
               
                console.log(  this.response.Response.last_page)
                this.pages=[]
                for(let i =0;i<  this.response.Response.last_page;i++){
                  this.pages.push(i+1)
                }
      // while(this.page<=10){
    //   this.page++
      
    // this.ordersserve.myorders(this.is_complete,this.page).subscribe((res)=>{console.log(res);this.response=res;
    //    let orders=this.response.Response.data;
    //   this.orders= this.orders.concat(orders)
    //    console.log(this.orders.length)})

       
    // }
  })
  console.log(document.getElementById('1'))
  // document.getElementById('1')?.classList.add('activepage')
 
  }
  waitingorders(){
    
  this.page=1
    this.is_complete=0
    this.ordersserve.myorders(this.is_complete,this.page).subscribe((res)=>{console.log(res);this.response=res;this.orders=this.response.Response.data;
     
      this.pages=[]
                for(let i =0;i<  this.response.Response.last_page;i++){
                  this.pages.push(i+1)
                }
    })
    // while(this.page<10){
    //   this.is_complete=0
      
    // this.ordersserve.myorders(this.is_complete,this.page).subscribe((res)=>{console.log(res);this.response=res;
    //    let orders=this.response.Response.data;
    //   this.orders= this.orders.concat(orders)
    //    console.log(this.orders)})
    //    this.page++
    // }
  }
  deliveredorders(){
    this.page=1
    this.is_complete=1
    this.ordersserve.myorders(this.is_complete,this.page).subscribe((res)=>{console.log(res);this.response=res;this.orders=this.response.Response.data;
      this.pages=[]
                for(let i =0;i<  this.response.Response.last_page;i++){
                  this.pages.push(i+1)
                }
    })
    // while(this.page<10){
    //   this.is_complete=1
      
    // this.ordersserve.myorders(this.is_complete,this.page).subscribe((res)=>{console.log(res);this.response=res;
    //    let orders=this.response.Response.data;
    //   this.orders= this.orders.concat(orders)
    //    console.log(this.orders)})
    //    this.page++
    // }

  }
  
paginate(page:number){
  document.getElementById('load')!.style.display='block'
    
  this.page=page
 
  this.ordersserve.myorders(this.is_complete,this.page).subscribe((res)=>{console.log(res);this.response=res;this.orders=this.response.Response.data;
    document.getElementById('load')!.style.display='none'
    
    this.pages=[]
                for(let i =0;i<  this.response.Response.last_page;i++){
                  this.pages.push(i+1)
                }
  })
  //  for(let i=0;i<this.pages.length;i++){
  //    document.getElementsByClassName('activepage')![0].classList.remove('activepage');
  //      }
  //      document.getElementById(page as unknown as string)!.classList.add('activepage')
 

}
}
