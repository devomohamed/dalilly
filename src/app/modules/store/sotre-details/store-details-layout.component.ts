import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from 'src/app/models/store.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-store-details-layout',
  templateUrl: './store-details-layout.component.html',
  styleUrls: ['./store-details-layout.component.scss']
})
export class StoreDetailsLayoutComponent implements OnInit {

  term=''
  id!:number
  response!:any
  store!:Store
    constructor(private profile:UserService,private activeroute: ActivatedRoute,) {
      this.id=this.activeroute.snapshot.params['id'] 
     }
  
    ngOnInit(): void {
      this.profile.store_profile(this.id).subscribe((res)=>{this.response=res;this.store=this.response.Response;console.log(res)})
  
    }

}
