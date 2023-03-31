import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { Package } from 'src/app/models/package.model';
import { CategoryService } from 'src/app/service/category.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-packages-of-cat',
  templateUrl: './packages-of-cat.component.html',
  styleUrls: ['./packages-of-cat.component.scss']
})
export class PackagesOfCatComponent implements OnInit {
id!:number
response!:any
packages!:Package[]
mess?:string
error!:any
data!:any
  constructor(private active :ActivatedRoute,private packgeeserve:CategoryService,private activeroute: ActivatedRoute,private route:Router) {
    this.id=this.activeroute.snapshot.params['id']
    this.data=this.active.snapshot.params['data']
 console.log(this.data)
   }


  ngOnInit(): void {
    this.packgeeserve.packages(this.id).subscribe((res)=>{this.response=res;this.packages=this.response.Response.packages;console.log(this.response.Response)} )
  }
subscribe(category_id:number,package_id:number){
this.packgeeserve.subscribe_package(category_id,package_id).subscribe((res)=>{
  this.error=res
   if(this.error.Error.code==402)
   this.mess=this.error.Error.desc
if(this.data!='data')
  this.route.navigateByUrl(`/me/profile/my-profile/add_product/${this.data.replace('#','*')}`)
  else
  this.route.navigateByUrl(`/me/profile/account/data`)
})
}
}
