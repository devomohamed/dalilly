import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { SearchData } from '../models/General/DataSearch';

@Injectable({
  providedIn: 'root'
})

export class AllAdsService {

  data$ = new Subject()
  category$ = new Subject()
  category:any
  isOnline:any
  min:any
  max:any
  keyword:any
  city:any

  constructor(private httpClient: HttpClient) {
    this.category$.subscribe((res:any)=>{
      this.category = res
    })
   }

   preparingFormData(obj:any){
    let formData = new FormData()
    Object.entries(obj).forEach(([key , value]:any)=>{
      if(Array.isArray(value)){
        formData.append(key,JSON.stringify(value))
      }else{
        if(value !== undefined){
          formData.append(key, value)
          // console.log(key,typeof value,value);
        }
      }

    })
    return formData;
  }

  search(dataSearch:SearchData){
    let categories: number[] = [];
    let cities: number[];
    let keyword;
    if(dataSearch.category == -1){
      console.log('i ca');
      categories = []
    }else{
      console.log('e ca');
      categories = [+dataSearch.category]
    }
    if(dataSearch.city == -1){
      console.log('i ci');

      cities = []
    }else{
      console.log('e ci');
      cities = [+dataSearch.city]
    }
    if(dataSearch.keyword != ''){
      keyword = dataSearch.keyword
    }else{
      keyword = ''
    }
    const model = this.preparingFormData({
      categories,
      cities,
      keyword
    })
    // console.log(model);

    this.httpClient.post(`${environment.apiURL}products/filter?os=android`,model)
    .subscribe((res:any)=>{
      this.data$.next(res)
    })
  }

  filter(dataFilter:any){
    // console.log(dataFilter);
    dataFilter.country_id = localStorage.getItem('country_id')
    console.log(dataFilter);
    const model = this.preparingFormData(dataFilter)

    this.httpClient.post(`${environment.apiURL}products/filter?os=android`,model)
    .subscribe((res:any)=>{
      this.data$.next(res)
    })
  }

  homeFiltration(){
    if(this.category.id == -1){
      const model = this.preparingFormData({categories:[]})
      this.httpClient.post(`${environment.apiURL}products/filter?os=android`,model)
      .subscribe((res:any)=>{
        this.data$.next(res)
    })
    }else{
    const model = this.preparingFormData({categories:[this.category.id]})
    this.httpClient.post(`${environment.apiURL}products/filter?os=android`,model)
    .subscribe((res:any)=>{
      this.data$.next(res)
    })
    }
  }

  getSizesAndColors(id:any){
    return this.httpClient.get(`${environment.apiURL}colors_sizes?os=android&category_id=${id}`)
  }

  getProperties(id:any){
    return this.httpClient.get(`${environment.apiURL}category/properties?os=android&category_id=${id}`)
  }


}
