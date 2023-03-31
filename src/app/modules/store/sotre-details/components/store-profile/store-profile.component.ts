import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { Store } from 'src/app/models/store.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-store-profile',
  templateUrl: './store-profile.component.html',
  styleUrls: ['./store-profile.component.scss']
})
export class StoreProfileComponent implements OnInit {
  term=''
  flag=0
  id:number
  response!:any
  store!:Product[]
    constructor(private profile:UserService,private activeroute: ActivatedRoute,) {
      this.id=this.activeroute.snapshot.params['id'] 
     }
  
    ngOnInit(): void {
      console.log(this.id)
      this.profile.store_profile(this.id).subscribe((res)=>{this.response=res;this.store=this.response.Response.products.data;console.log(this.store)})
  
    }
    shrink(){
      this.flag=0
        }
       spread(){
          this.flag=1
            }
      
delete(id:number){  this.profile.delete_product(id).subscribe((res)=>{
              window.location.reload()
            })

}}
