import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../service/store.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-stores',
  templateUrl: './my-stores.component.html',
  styleUrls: ['./my-stores.component.scss']
})
export class MyStoresComponent implements OnInit {

  stores:any
  catId:any

  constructor(private storeService:StoreService,private activateRoute:ActivatedRoute) {
    this.catId = this.activateRoute.snapshot.paramMap.get('id')
   }

   getStores(){
    this.storeService.getStoresByCategory(this.catId).subscribe((res:any)=>{
      this.stores = res.Response
      // console.log(res);

    },(error:any)=>{console.log(error);
    })
  }

  ngOnInit(): void {
    this.getStores()
  }

}
