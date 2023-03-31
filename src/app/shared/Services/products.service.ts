import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceResponse } from 'src/app/models/General/ServiceResponse';

import { environment } from 'src/environments/environment';
import { Data } from '@angular/router';
const Url = environment.apiURL;

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  private _apiproducts=`${Url}/products`;

  constructor(private http:HttpClient) { }

  getProducts():Observable<ServiceResponse<Data[]>>{
    var formData: any = new FormData();
    formData.append("lang", 'ar');
    formData.append("categories", '[31]');
    formData.append("lat", '0');
    formData.append("long", '0');
    return this.http.post<ServiceResponse<Data[]>>(`${this._apiproducts}/filter?page=1&os=Android`,formData)
  }

}


