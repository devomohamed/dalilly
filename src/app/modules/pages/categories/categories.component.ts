import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import { SearchAndFilterService } from '../../../service/search-and-filter.service';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  response!:any
  dataSearchActive:boolean = false
  dataSearch:any

  constructor(private searchAndFilter:SearchAndFilterService) { }

  searchNotActive(){
    setTimeout(()=>{this.dataSearchActive = false},3000)
  }

  search(event:any){
    if(event.target.value != ''){
      setTimeout(()=>{
        let noData = `No Store In Keyword ${event.target.value}`
        this.searchAndFilter.searchAll(event.target.value).subscribe((res:any)=>{
          console.log(res);

          if(res.Response.categories.data.length){
            this.dataSearch = res.Response.categories.data
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
  }

  ngOnInit(): void {


  }

}
