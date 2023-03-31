import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from '../models/order.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-allcodeseller',
  templateUrl: './allcodeseller.component.html',
  styleUrls: ['./allcodeseller.component.scss']
})
export class AllcodesellerComponent implements OnInit {
  id!:number
  response!:any
  order!:Order
  constructor(private orderdetailes:UserService,private activeroute: ActivatedRoute,) {
  }

ngOnInit(): void {
  this.id=this.activeroute.snapshot.params['id'] 
console.log(this.id)
  //this.profile.store_profile(this.id).subscribe((res)=>{this.response=res;this.store=this.response.Response;console.log(res)})
this.orderdetailes.seller_order(this.id).subscribe((res)=>{this.response=res;this.order=this.response.Response;console.log(res)})
}
copyit(){
  const cb = navigator.clipboard;
  const paragraph = document.getElementById('p')!;
  cb.writeText(paragraph.innerText)

}

}
