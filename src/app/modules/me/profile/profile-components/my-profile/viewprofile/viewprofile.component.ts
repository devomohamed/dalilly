import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { Package } from 'src/app/models/package.model';
import { CategoryService } from 'src/app/service/category.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.scss']
})

export class ViewprofileComponent implements OnInit {
response!:any
packages!:Package[]
check_num!:number
selectedprice!:number
product_id!:number
  constructor(private packageserve:CategoryService,private activeroute:ActivatedRoute,private route:Router,private userservese:UserService) { }
// country_id=this.activeroute.snapshot.params['country_id']


  ngOnInit(): void {
    //this num as a flag to check if come from addproduct or none
    this.check_num=this.activeroute.snapshot.params['num']
    this.product_id=this.activeroute.snapshot.params['product_id']
    this.packageserve.profile_packages(1,0).subscribe((res)=>{this.response=res;this.packages=this.response.Response; console.log(res)})

  }
  continueo(){
    this.route.navigateByUrl(`/me/profile/my-profile/confirm/${this.product_id}`)

  }

  select(){
    console.log(this.selectedprice, this.product_id)
    this.userservese.update_product({'id':this.product_id,'package_type_country_id':this.selectedprice}).subscribe((res)=>{console.log(res)
         if(this.check_num==1)
         this.route.navigateByUrl(`/me/profile/my-profile/confirm/${this.product_id}`)
         else
         this.route.navigateByUrl('/me/profile/my-profile')

  console.log(res)
    })

  }
  detectme(id:number,value:number,package_id:number,last_child:number,price_id:number){
  this.selectedprice=price_id
    let ele=document.getElementById((package_id+last_child) as unknown as string)!
       ele.innerHTML=value as unknown as string
   let all= document.getElementsByClassName('activedays')

    for(let i=0; i< all.length;i++){
      all[i].classList.remove('activedays')
    }
    document.getElementById(id as unknown as string)!.classList.add('activedays')

  }

}
