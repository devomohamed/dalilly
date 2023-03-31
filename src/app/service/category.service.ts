import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';
import { Store } from '../models/store.model';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  headers=new HttpHeaders({
    Authorization: `Bearer ${localStorage.getItem('token')}`,

  })

  constructor(private httpclient: HttpClient,private cookieService: CookieService) { }
 //////////getallcategorries/////////////////
  all(){
    let countryId = localStorage.getItem('country_id')
    return this.httpclient.get<{ cateories: Category }>(`${environment.apiURL}categories?os=android&country_id=${countryId}`)
  }
  //////////////////////////////////////////////////
  sub_categories(category_id:number){
    let countryId = localStorage.getItem('country_id')
    return this.httpclient.get<{ cateories: Category }>(`${environment.apiURL}sub_categories?os=android&country_id=${countryId}&category_id=${category_id}`)
  }
  //////////////////////end/////////////////
  ////////////////////////getallstories/////////
  stores():Observable<{stores:Store[]}>{
return this.httpclient.get<{stores:Store []}>(`${environment.apiURL}stores_categories?os=Android&lang=en&country_id=1`)
  }
  ////////////////////end//////////////////
  //////////////////////categories in each store//////////////////////
  categories_store(store_id:number){
    return this.httpclient.get(`${environment.apiURL}list_categories?os=android&country_id=1&store_id=${store_id}&page=1`)

  }
  countries(){
    return this.httpclient.get<{ Response: any }>(`${environment.apiURL}countries?os=android&lang=en`)

   }

   getoneproduct(id:number){

    return this.httpclient.get(`${environment.apiURL}product?os=android&product_id=${id}`)
  }

  ///////////////////////////end///////////////
  ///////////////////////////packages/////////
  packages(id:number)
  {const headers =this.headers
    return this.httpclient.get(`${environment.apiURL}category/packages?os=android&category_id=${id}&country_id=1`,{headers})

  }
  subscribe_package(category_id:number,package_id:number){
    const headers =this.headers
    return this.httpclient.post(`${environment.apiURL}subscribe/category/package?os=android`,{'category_id':category_id,'package_id':package_id},{headers})
  }
  accounts(countray_id:number){
    return this.httpclient.get(`${environment.apiURL}accounts?os=android&country_id=1`)

  }
  upgrade_account(account_id:number,price:number){
    const headers =this.headers
    return this.httpclient.post(`${environment.apiURL}profile/upgrade?os=android`,{'account_id':account_id,'price':price},{headers})

  }
  profile_packages(country_id:number,type_id:number){
    return this.httpclient.get(`${environment.apiURL}packages?os=android&country_id=${country_id}&type=${type_id}`)

  }
  properities(category_id:number){
    return this.httpclient.get(`${environment.apiURL}category/properties?os=android&category_id=${category_id}`)

  }

  getCountries(){
    return this.httpclient.get(`${environment.apiURL}countries?os=android`)
  }

  getSubCategories(){
    return this.httpclient.get(`${environment.apiURL}parent_sub_categories?os=android`)
  }

  getCategoriesOnline(){
    return this.httpclient.get(`${environment.apiURL}parent_sub_categories?os=android&is_online=1`)
  }

  getCategoryDataAllProductsAndSub(catId:any){
    return this.httpclient.get(`${environment.apiURL}category?os=android&category_id=${catId}`)
  }

  getCategoriesContainStores(){
    let countryId = localStorage.getItem('country_id')
    return this.httpclient.get(`${environment.apiURL}stores_categories?os=android&country_id=${countryId}`)
  }

}
