import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from '../models/order.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-viewcode',
  templateUrl: './viewcode.component.html',
  styleUrls: ['./viewcode.component.scss']
})
export class ViewcodeComponent implements OnInit {

 
  term=''
  id!:number
  response!:any
  order!:Order
    constructor(private orderdetailes:UserService,private activeroute: ActivatedRoute,) {
      this.id=this.activeroute.snapshot.params['id'] 
     }
  
    ngOnInit(): void {
      //this.profile.store_profile(this.id).subscribe((res)=>{this.response=res;this.store=this.response.Response;console.log(res)})
  this.orderdetailes.orderdetailes(this.id).subscribe((res)=>{this.response=res;this.order=this.response.Response;console.log(this.order)})
    }
    copyit(){
      const cb = navigator.clipboard;
      const paragraph = document.getElementById('p')!;
      cb.writeText(paragraph.innerText)
    
    }

}
