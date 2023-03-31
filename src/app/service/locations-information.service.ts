import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocationsInformationService {

  constructor(private http:HttpClient) { }

  getCountries(){
    let lang = localStorage.getItem('lang')
    let countryId = localStorage.getItem('country_id')
    return this.http.get(`${environment.apiURL}cities?os=android&lang=${lang}&country_id=${countryId}`)
  }
}
