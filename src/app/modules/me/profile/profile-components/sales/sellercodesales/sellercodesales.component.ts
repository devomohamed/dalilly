import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/models/order.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-sellercodesales',
  templateUrl: './sellercodesales.component.html',
  styleUrls: ['./sellercodesales.component.scss']
})
export class SellercodesalesComponent implements OnInit {
  id!:number
  response!:any
  order!:Order
  index!:number
 product!:any
  constructor(private orderdetailes:UserService,private activeroute: ActivatedRoute,) {
  }


  ngOnInit(): void {
    this.id=this.activeroute.snapshot.params['id'] 
    this.index=this.activeroute.snapshot.params['index'] 
  console.log(this.id)
    this.orderdetailes.seller_order(this.id).subscribe((res)=>{
      this.response=res;
      this.order=this.response.Response;
      //this.product=this.order.products[index]
      console.log(res)})
  
  }
  copyit(){
    const cb = navigator.clipboard;
    const paragraph = document.getElementById('p')!;
    cb.writeText(paragraph.innerText)
  
  }


}
