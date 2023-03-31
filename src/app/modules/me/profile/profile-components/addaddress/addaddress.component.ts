import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/models/addresss.model';

import { Country } from 'src/app/models/country.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-addaddress',
  templateUrl: './addaddress.component.html',
  styleUrls: ['./addaddress.component.scss']
})
export class AddaddressComponent implements OnInit {
  setdefault=0
  title!:string
  city!:string
  address_id!:number
  city_name!:string
  region_name!:string
  fmobile!:number
  smobile!:number
  street!:number
  building!:number
  floor!:number
  apartment!:number
  landmark!:number
  postalcode!:number
  response2: any;
  country!:Country
  add!:Address
  constructor(private userserve:UserService) { }

  ngOnInit(): void {
  }

}
