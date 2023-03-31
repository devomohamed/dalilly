import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from 'src/app/models/addresss.model';
import { Cart } from 'src/app/models/cart.model';
import { Checkout } from 'src/app/models/checkout.model';
import { City } from 'src/app/models/city.model';
import { Country } from 'src/app/models/country.model';
import { Product } from 'src/app/models/product.model';
import { Region } from 'src/app/models/region.model';

import * as L from 'leaflet';
import{AfterViewInit} from '@angular/core';


import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-cartcheckout',
  templateUrl: './cartcheckout.component.html',
  styleUrls: ['./cartcheckout.component.scss'],

})
export class CartcheckoutComponent implements OnInit{
f=[0,9,9,3,4,3]
  response!:any
  addresses!:Address[]
  afterdel!:object

  // variables for cities///////
  response_city!:any
  cities!:City[]
  ////////////end cities variables////
  ////////////variables for region////////////
  response_region!:any
  regions!:Region[]
  city_id!:number
  ////////variables for region end////////////////
  selected_city!:Region[]
  region_id!:number
  /////////////////variables for address////////
    opened=0
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
    lat!:number
    lng!:number
  ///////////////////////////////////////////////
  ///////////////variables for cart/////////
response_cart!:any
cart_products!:any
cart_data!:Cart
deliver_fast=0
points!:string
copoun!:any
discount!:number
message!:string
toggletocancel=0
toggletocancel2=0
date!:string
time!:string
payment_type!:number
user_comment!:string
checkout_res!:any
map!:any
//////////////////////////////////
//////////////////calcaluation for all fees////////////////
response_fees!:any
fees!:Checkout

/////////////////
validmess!:string
validmess2!:string
regions_cala!:any
stores_calc!:any[]

    constructor(private addressserve:UserService,private activeroute:Router,private route:Router) { }

    ngOnInit(): void {
     localStorage.setItem('check','1')
     this.map=document.getElementById('map')!
        //get all address
      this.getalladdress()
     //////////
     this.cart()
      //get last address
      this.address_profile()
      //////////////get cities
      this.getcitites()
      /////calc delivery
      //this.calc_delivery()


    }
    getalladdress(){
      this.addressserve.showalladdress().subscribe((res)=>{
        this.response=res;
        this.addresses=this.response.Response;
        if(this.addresses.length!=0){
          for(let i=0;i<this.addresses.length;i++){
            if(this.addresses[i].is_default==1)
            this.address_id=this.addresses[i].id
            else{
              this.address_id=this.addresses[0].id
            }
          }
          this.calc_delivery()
        }
        else{
          this.route.navigateByUrl('/checkout/Address')
        }

      })
    }
   newaddress(){
    //  if(this.opened==0){
    //    document.getElementById('plusicon')!.classList.add('fa-minus')
    //    document.getElementById('plusicon')!.classList.remove('fa-plus')

    //    this.opened=1

    //  }
    //  else{
    //   document.getElementById('plusicon')!.classList.add('fa-plus')
    //   document.getElementById('plusicon')!.classList.remove('fa-minus')

    //   this.opened=0
    //  }
    this.route.navigateByUrl('/Address')



    }
    address_profile(){
      this.addressserve.profile({country_id:1}).subscribe((res)=>{this.response2=res;this.add=this.response2.Response
        this.country=this.response2.Response.country ;console.log(res)
        this.getmap()
      })
    }
    /////////////////////////////////////////////////
    cart(){
      this.addressserve.products_cart().subscribe((res)=>{
        console.log(res)
        this.response_cart=res
        this.cart_data=this.response_cart.Response
        this.cart_products=this.cart_data.cart
      })
    }
    getstatus(e:any){
      if(this.deliver_fast==0)
     this.deliver_fast=1
     else
     this.deliver_fast=0
     this.calc_delivery()
    }
    ///////////////////////////cities functions//////////////////
getcitites(){
  this.addressserve.cities().subscribe((res)=>{this.response_city=res;this.cities=this.response_city.Response})

}
getcityid(e:any){
  for(let i=0;i<e.target.childNodes.length;i++){
    if(e.target.value==e.target.childNodes[i].value)
          {console.log(e.target.childNodes[i].value)
            this.city_id=e.target.childNodes[i].id
            this.city_name=e.target.value
            this.selected_city=this.cities[i-1]?.regions
            break;
          }
        }
}
    /////////////////end cities functions/////////////////

   /////////////////////getregionid//////////////
getregionid(e:any){
  for(let i=0;i<e.target.childNodes.length;i++){
    if(e.target.value==e.target.childNodes[i].value)
          {console.log(e.target.childNodes[i].value)
            this.region_id=e.target.childNodes[i].id
           this.region_name=e.target.value
            break;
          }
        }
}
   ////////////////////////////////


    setasdefault(){
      if(this.setdefault==0)
      this.setdefault=1
      else this.setdefault=0
    }
    getaddress(address_id:number){
      this.address_id=address_id
      this.calc_delivery()
    }
    gettime(time:string,i:number){
    this.time=time;
     for(let i=0;i<this.cart_data.times.length;i++){
          let ele = document.getElementById('t'+i)!.classList.remove('activetimes')
    }
    document.getElementById('t'+i)!.classList.add('activetimes')

    }
    addnewaddress(){
      console.log(this.title)
     let fd=new  FormData();
     let address=this.city_name+','+this.region_name
     if(this.title)
     fd.append('name',this.title)

      fd.append('city_id',this.city_id as unknown as string)
     fd.append('region_id',this.region_id as unknown as string)
     if(this.fmobile)
     fd.append('mobile',this.fmobile as unknown as string)
     if(this.smobile)
     fd.append('phone',this.smobile as unknown as string)
     if(this.street)
    {address+=','+this.street
       fd.append('street',this.street as unknown as string )}
     if(this.floor)
     {address+=','+this.floor
       fd.append('floor',this.floor as unknown as string)}
     if(this.building)
     {address+=','+this.building
       fd.append('building',this.building as unknown as string)}
     if(this.apartment)
     {address+=','+this.apartment
       fd.append('apartment',this.apartment as unknown as string)}
     if(this.landmark)
     fd.append('landmark',this.landmark as unknown as string)
     if(this.setdefault==1){
       fd.append('is_default','1')
     }
     fd.append('address',address)
      this.addressserve.addaddress(fd).subscribe((res)=>{
        console.log(res)
        this.opened=0
        window.scroll(0,300)
        this.getalladdress()
      })

    }
  //  showPosition(position:any) {
  //     console.log(position.coords.latitude +
  //     "<br>Longitude: " + position.coords.longitude);
  //   }
  calc_delivery(){



    let fd=new  FormData();
    fd.append('country_id',localStorage.getItem('country_id') as string)
    fd.append('address_id',this.address_id as unknown as string)
    fd.append('is_fast',this.deliver_fast as unknown as string)
    console.log(this.points)
    if(this.points)
    fd.append('points',this.points as unknown as string)
    if(this.copoun)
    fd.append('coupon',this.copoun)

   this.addressserve.calc_delivery(fd).subscribe((res:any)=>{
     this.response_fees=res
     this.fees=this.response_fees.Response
     if(this.copoun&&this.fees.coupon_value==0){
       this.message='invalid copoun or expire'
     }


    console.log(res)
    this.regions_cala=this.fees.regions
    this.stores_calc=this.fees.stores
    console.log(this.stores_calc)
  })



  }
  applyreedem(){
    if(this.points)
   { this.calc_delivery()

      this.toggletocancel=1
      this.validmess=''
    }

      else this.validmess='Enter points please'

  }
  cancelreedem(){

    this.toggletocancel=0
    this.points=''
    this.calc_delivery()
  }
  // togglename(){

  //     this.toggletocancel=0

  // }
  // clearif(){
  //   if(this.points=='')
  //   this.calc_delivery()

  // }
  applycopoun(){
    console.log(this.copoun)
    if(this.copoun)

   { this.calc_delivery()
    this.toggletocancel2=1
    this.validmess2=''
  }
    else this.validmess2='Enter Copoun Please !'
  }
  cancelcopoun(){
    this.toggletocancel2=0
    this.copoun=''
    this.message=''
    this.calc_delivery()
  }
   getpay(method:string){
     if(method=='cash')
     this.payment_type=0
     else
     this.payment_type=1
   }
  checkout(){
    let fd=new  FormData();
    fd.append('country_id',localStorage.getItem('country_id') as string)
    fd.append('address_id',this.address_id as unknown as string)
    if(this.date)
    fd.append('date',this.date)
    if(this.time)
    fd.append('time',this.time)
    if(this.deliver_fast)
    fd.append('is_fast',this.deliver_fast as unknown as string)
    if(this.payment_type)
    fd.append('payment_type',this.payment_type as unknown as string)
    if(this.user_comment)
    fd.append('user_comment',this.user_comment )
    if(this.copoun)
    fd.append('coupon',this.copoun)
    fd.append('total_delivery',this.fees.total_delivery as unknown as string)
     this.addressserve.checkout(fd).subscribe((res:any)=>{
       this.checkout_res=res
       console.log(this.checkout_res.Error)
     localStorage.setItem('check','0')
     if(this.checkout_res.Error.status!=false)
       this.route.navigateByUrl(`/me/profile/order/${this.checkout_res.Response.id}`)
       else{
         window.alert('your region not covered in delivery')
       }
      })
  }

 getmap(){

  const map= new L.Map('map').setView([this.add.lat , this.add.long], 5);
  var marker = L.marker([this.add.lat, this.add.long]).addTo(map)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap'
}).addTo(map)
map.on('click', (e:any) =>{
  var lat,
  lon,
  zoom;

lat = e.latlng.lat;
lon = e.latlng.lng;
zoom = map.getZoom();
console.log("You clicked the map at LAT: "+ lat+" and LONG: "+lon );
if (marker != undefined) {
map.removeLayer(marker);
};
marker =  L.marker([lat,lon]).addTo(map);


   })


 }
 close(){
  var modal = document.getElementById("myModal")!;

var span = document.getElementsByClassName("close")[0];
modal.style.display = "none";
}
showpopup(cart_id:number)
  {
  //   var modal = document.getElementById("myModal")!;
  // modal.style.display = "block";
  //window.confirm('Do you want to remove this item from your cart?')
  let text;
  if (confirm("Do you want to remove this item from your cart?") == true) {

    this.addressserve.delete_item_cart(cart_id).subscribe((res:any)=>{console.log(res);window.location.reload()})

  } else {
   return
  }

}
delete(){

}

}
