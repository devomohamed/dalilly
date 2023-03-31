import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})



export class OffersComponent implements OnInit {
  response!:any
  offers!:any[]
  constructor(private offersserve:UserService,private route:Router ) { }

  ngOnInit(): void {
   this.myoffers()
 
  }
  myoffers(){ this.offersserve.offers().subscribe((res)=>{console.log(res);
    this.response=res
    this.offers=this.response.Response.data
    })}
  like(offer_id:number){
    this.offersserve.offer_like(offer_id).subscribe((res)=>{
      this.myoffers()})
  }

}
