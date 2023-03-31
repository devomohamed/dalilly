import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  headers=new HttpHeaders({
    Authorization: `Bearer ${localStorage.getItem('token')}`,

  });

  constructor(private httpClient: HttpClient,private route:Router) { }
  searchData:any
  cart$ = new Subject()

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

  preparingFormData2(obj:any){
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

  getProducts(obj:any){
    const model = this.preparingFormData(obj)
    return this.httpClient.post(`${environment.apiURL}products/filter?os=android`,model)
  }

  getProductsByCategory(obj:any){
    const model = this.preparingFormData(obj)
    return this.httpClient.post(`${environment.apiURL}products/filter?os=android`,model)
  }

  getProductDetails(id:any){
    const headers =this.headers
    return this.httpClient.get(`${environment.apiURL}product?os=android&product_id=${id}`,{headers})
  }

  getAllProductsByCategory(id:any){
    return this.httpClient.get(`${environment.apiURL}category?os=android&category_id=${id}`)
  }
  // Get All Offers
  getOffers(){
    let countryId = localStorage.getItem('country_id')
    const headers =this.headers
    return this.httpClient.get(`${environment.apiURL}offers?os=android&country_id=${countryId}&categories=[]&users=[]&city_id=[]&region_id=[]`,{headers})
  }

  // Add Comment In Offer
  addOfferComment(data:any){
    let myData = this.preparingFormData(data)
    const headers =this.headers
    return this.httpClient.post(`${environment.apiURL}offers/comment?os=android`,myData,{headers})
  }

  // Add Like In Offer
  likeOffer(data:any){
    let myData = this.preparingFormData(data)
    const headers =this.headers
    return this.httpClient.post(`${environment.apiURL}offers/like?os=android`,myData,{headers})
  }

  // Get All Data From Offer By Id
  getOffer(id:any){
    const headers =this.headers
    return this.httpClient.get(`${environment.apiURL}offer?os=android&offer_id=${id}`,{headers})
  }

  // Get Products By FormData Filter
  getProductByFormData(data:any){
    data.country_id = localStorage.getItem('country_id')
    let myData = this.preparingFormData(data)
    return this.httpClient.post(`${environment.apiURL}products/filter?os=android`,myData)
  }

// Add product To Cart
  addToCart(data:any){
    let myData = this.preparingFormData2(data)
    const headers =this.headers
    return this.httpClient.post(`${environment.apiURL}cart/add?os=android`,myData,{headers})
  }

  // Get All Products In Cart
  getCartItems(){
    const headers =this.headers
    let country_id = Number(JSON.parse(localStorage.getItem('country_id')||'1'))
    return this.httpClient.get(`${environment.apiURL}cart?os=android&country_id=${country_id}`,{headers})
  }

  // Changes Cart Subject
  changesInCart(){
    this.getCartItems().subscribe((res:any)=>{
      this.cart$.next(res)
    },(error:any)=>{
      console.log(error);

    })
  }

  // Add product To Cart
  deleteItemInCart(data:any){
    let myData = this.preparingFormData(data)
    const headers =this.headers
    return this.httpClient.post(`${environment.apiURL}cart/delete?os=android`,myData,{headers})
  }

  getProductsByFollow(data:any){
    const headers =this.headers
    let country_id = Number(JSON.parse(localStorage.getItem('country_id')||'1'))
    return this.httpClient.get(`${environment.apiURL}timeline?os=android&page=${data.page}&country_id=${country_id}&city_id=${data.city}`,{headers})
  }

  // cart$: BehaviorSubject<Cart> = new BehaviorSubject(this.getCart())


  getComments(productId:any){
    const headers =this.headers
    return this.httpClient.get(`${environment.apiURL}product/comments?os=android&product_id=${productId}`,{headers})
  }

  likeProduct(productID:any){
    let headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });

    return this.httpClient.post(`${environment.apiURL}product/like?os=android&product_id=${productID}`,{},{headers})
  }

  rateProduct(data:any){
    const headers =this.headers
    let myData = this.preparingFormData(data)
    return this.httpClient.post(`${environment.apiURL}product/rate?os=android`,myData,{headers})
  }

  reportProduct(data:any){
    const headers =this.headers
    let myData = this.preparingFormData(data)
    return this.httpClient.post(`${environment.apiURL}product/report?os=android`,myData,{headers})
  }
  replayComment(data:any){
    const headers =this.headers
    let myData = this.preparingFormData2(data)
    return this.httpClient.post(`${environment.apiURL}product/comment?os=android`,myData,{headers})
  }


  deleteComment(data:any){
    const headers =this.headers
    let myData = this.preparingFormData(data)
    return this.httpClient.post(`${environment.apiURL}product/delete_comment?os=android`,myData,{headers})
  }

  getOffersComments(offerId:any){
    const headers =this.headers
    return this.httpClient.get(`${environment.apiURL}offers/comments?os=android&offer_id=${offerId}`,{headers})
  }

  deleteOfferComment(data:any){
    const headers =this.headers
    let myData = this.preparingFormData(data)
    return this.httpClient.post(`${environment.apiURL}offers/comment/delete?os=android`,myData,{headers})
  }






}
