import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  headers=new HttpHeaders({
    Authorization: `Bearer ${localStorage.getItem('token')}`,

  });
  constructor(private httpClient: HttpClient,private route:Router) { }
  getSliderData(){
    let countryId = localStorage.getItem('country_id')
    // const headers =this.headers
    return this.httpClient.get(`${environment.apiURL}slider?os=android&country_id=${countryId}`)
  }
  getStoresAndByOnline(){
    return this.httpClient.get(`${environment.apiURL}home?os=android`)
  }
  getRows(){
    let countryId = localStorage.getItem('country_id')
    const headers =this.headers
    return this.httpClient.get(`${environment.apiURL}rows?os=android&ip=1&country_id=[${countryId}]`,{headers})
  }
}
