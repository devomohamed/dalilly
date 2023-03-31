import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Package } from 'src/app/models/package.model';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-addpackages',
  templateUrl: './addpackages.component.html',
  styleUrls: ['./addpackages.component.scss']
})
export class AddpackagesComponent implements OnInit {

  response!:any
  packages!:Package[]
    constructor(private route:Router,private packageserve:CategoryService,private activeroute:ActivatedRoute) { }
  country_id=this.activeroute.snapshot.params['country_id']
    ngOnInit(): void {
      this.packageserve.profile_packages(this.country_id,1).subscribe((res)=>{this.response=res;this.packages=this.response.Response; console.log(res)})

    }
    add_package(){
      this.route.navigateByUrl('/me/profile/offers')

    }
    continueo(){
      this.route.navigateByUrl('/me/profile/offers')

    }
    detectme(id:number){
      console.log(id)
     let all= document.getElementsByClassName('active')
      for(let i=0; i< all.length;i++){
        all[i].classList.remove('active')
      }
      document.getElementById(id as unknown as string)!.classList.add('active')
    }

}
