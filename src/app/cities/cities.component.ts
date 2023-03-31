import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { City } from '../models/city.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {
response!:any
cities!:City[]
hasregion!:boolean
  constructor(private storessserve:UserService,private route:Router,private active:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.storessserve.image_file)
    this.storessserve.cities().subscribe((res)=>{this.response=res;this.cities=this.response.Response})
     }
  getregion(id:number,l:number,name:string){
    
  
    let data=JSON.parse(this.active.snapshot.params['data'])
     if(l!=0)
   {data.city_id=id
      this.route.navigateByUrl(`/home/me/profile/regions/${JSON.stringify(data)}`)
    }else {
     data.city_name=name;data.city_id=id
     if(data.store_flag==1)
      this.route.navigateByUrl(`/home/me/profile/stores/add-store/${JSON.stringify(data)}`)
      else
      this.route.navigateByUrl(`/home/me/profile/offers/offer-add/${JSON.stringify(data)}`)
     
}
  }

}
