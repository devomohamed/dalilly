import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Store } from '../models/store.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  headers=new HttpHeaders({
    Authorization: `Bearer ${localStorage.getItem('token')}`,

  });

  constructor(private http: HttpClient) { }
  // change Object To FormData
  preparingFormData(obj:any){
    let formData = new FormData()
    Object.entries(obj).forEach(([key , value]:any)=>{
      if(Array.isArray(value)){
        formData.append(key,JSON.stringify(value))
      }else{
        formData.append(key,value)
      }
    })
    return formData;
  }

  getStores(data:any={countryId:2}){
    return this.http.get<Store>(`${environment.apiURL}stores?os=android&category_id=${data.countryId}`)
  }

  storeInfo(data:any){
    let headers = this.headers
    let country = localStorage.getItem('country_id')
    return this.http.get(`${environment.apiURL}store?os=android&store_id=${data.storeId}&country_id=${country}`,{headers})
  }
  getStore(data:any){
    let headers = this.headers
    data.country_id = localStorage.getItem('country_id')
    const model = this.preparingFormData(data)
    return this.http.post(`${environment.apiURL}products/filter?os=android`,model,{headers})
  }

  getStoresByCategory(categoryId:any){
    let countryId = localStorage.getItem('country_id')
    return this.http.get(`${environment.apiURL}stores?os=android&category_id=${categoryId}&country_id=${countryId}`)
  }

  // Delete Rate Store
  deleteRateStore(data:any){
    let myData = this.preparingFormData(data)
    const headers =this.headers
    return this.http.post(`${environment.apiURL}store/delete_rate?os=android`,myData,{headers})
  }

  // Rate Store
  rateStore(data:any){
    let myData = this.preparingFormData(data)
    const headers =this.headers
    return this.http.post(`${environment.apiURL}store/rate?os=android`,myData,{headers})
  }

  // Follow Store
  followAndUnFollowStore(data:any){
    let myData = this.preparingFormData(data)
    const headers =this.headers
    return this.http.post(`${environment.apiURL}store/follow?os=android`,myData,{headers})
  }

}
