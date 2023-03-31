import { Component, OnInit } from '@angular/core';
import { Store } from 'src/app/models/store.model';
import { SearchAndFilterService } from '../../../service/search-and-filter.service';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent implements OnInit {
  stores!:Store []
  response!:any
  dataSearchActive:boolean = false
  dataSearch:any
    constructor(private searchAndFilter:SearchAndFilterService) { }

    searchNotActive(){
      setTimeout(()=>{this.dataSearchActive = false},3000)
    }
    search(event:any){
      setTimeout(()=>{
        let noData = `No Store In Keyword ${event.target.value}`
        this.searchAndFilter.searchAll(event.target.value).subscribe((res:any)=>{
          console.log(res);

          if(res.Response.categories.data.length){
            this.dataSearch = res.Response.stores.data
          }else{
            this.dataSearch = [{name:noData}]
            this.dataSearchActive = true
          }
        },(error:any)=>{
          console.log(error);
          this.dataSearchActive = true
          this.dataSearch = [{name:noData}]
        })
      },1000)
    }

    ngOnInit(): void {
      // this.getStores()
    }


    // ngOnInit(): void {
    //   this.catserve.stores().subscribe((res)=>{this.response=res;this.stores=this.response.Response})
    // }

}
