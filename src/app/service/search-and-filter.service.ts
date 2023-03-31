import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchAndFilterService {

  constructor(private http: HttpClient) { }

  searchAll(keyword:any){
    let countryId = localStorage.getItem('country_id')
    return this.http.get(`${environment.apiURL}search?os=android&keyword=${keyword}&country_id=${countryId}`)
  }
}
