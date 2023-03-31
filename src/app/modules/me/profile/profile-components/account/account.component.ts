import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Account } from 'src/app/models/account.model';
import { Category } from 'src/app/models/category.model';
import { UserService } from 'src/app/service/user.service';

import SwiperCore from 'swiper';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
  
})
export class AccountComponent implements OnInit {
  active = 1;
  activePlan !:number;
  activePackage !:number;
  response!:any
  accounts!:Account[]
  cats!:any
  constructor(private accountserve:UserService,private activeroute :ActivatedRoute ) { }

  ngOnInit(): void {
    console.log(this.activeroute.snapshot.params['data'])
    this.activePlan=0
    this.activePackage=0
    this.accountserve.myaccount().subscribe((res)=>{this.response=res;this.accounts=this.response.Response.accounts;this.cats=this.response.Response.categories_packages;console.log(this.accounts)})
  }

  onSwiper([swiper] : any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
    
  }

}
