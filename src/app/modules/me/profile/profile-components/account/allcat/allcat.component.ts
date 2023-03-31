import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from 'src/app/models/account.model';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-allcat',
  templateUrl: './allcat.component.html',
  styleUrls: ['./allcat.component.scss']
})
export class AllcatComponent implements OnInit {
 is_account=1;
 is_category=0
  categories!: Category[]

  respose!:any
  accounts!:Account[]
  country_id!:number
  data!:any
    constructor(private catserve:CategoryService,private route:Router,private active:ActivatedRoute) {
this.data=this.active.snapshot.params['data']
    }

    ngOnInit(): void {
      this.catserve.all().subscribe((res)=>{this.respose=res
        this.categories=this.respose.Response
      })


    }
    isaccount(){
       this.is_account=1
       this.is_category=0
       this.catserve.accounts(this.country_id=1).subscribe((res)=>{this.respose=res;this.accounts=this.respose.Response;console.log(this.accounts)})
    }
iscategory(){
  this.is_account=0
  this.is_category=1
  this.catserve.all().subscribe((res)=>{this.respose=res
    this.categories=this.respose.Response })

}
upgradespecificcategory(category_id:number){
  if(this.data!='data')
  this.route.navigateByUrl(`/me/profile/account/${this.data.replace('#','*')}/packages/${category_id}`)
  else
  this.route.navigateByUrl(`/me/profile/account/data/packages/${category_id}`)

}
upgrade(id:number,price:number){
  if(this.data!='data')
this.catserve.upgrade_account(id,price).subscribe((res)=>{this.route.navigateByUrl(`/me/profile/account/${this.data.replace('#','*')}`)})
else
this.catserve.upgrade_account(id,price).subscribe((res)=>{this.route.navigateByUrl(`/me/profile/account/data`)})

}
}
