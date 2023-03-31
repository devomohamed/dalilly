import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { Store } from 'src/app/models/store.model';
import { CategoryService } from 'src/app/service/category.service';
import { UserService } from 'src/app/service/user.service';
import { Address } from '../models/addresss.model';
import { Product } from '../models/product.model';
import { ProductsModule } from '../modules/store/products/products.module';
import {} from 'googlemaps';
import { ViewChild } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { City } from '../models/city.model';
import { Country } from '../models/country.model';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})

export class AddproductComponent implements OnInit {
  country!:Country
  result:any
map:any
marker!:any
  response!:any
  response1!:any
  add!:Address
  cities!:City[]
  stores!:Store[]
  categories!: Category[]
  subcategories!:Category[]
  id!:number
  respose1!:any
  data:Product={
    id:0,
  category_ids:[],
    name: '',

    image: '',

    // city:{},
    // seller:null,
    calls: 0,
    chats: 0,
    viewers: 0,
    offers: 0,
    // created_at:Date
    online_for: 0,
    expire_in: 0,
    favourite: false,
    // category:null,
    comments: 0,
    is_complete: false,
    created_at: '',
    rate: 0,
    // store:null,
    title: '',
    desc: '',

  store_id:0,
    store_name:'my account',
    category_name:[],
    update:0,
    update2:0


  }
  myLatlng !:any
  flag!:boolean
  response2: any;
  infoWindow:any

  constructor(private route:Router,private storessserve:UserService,private catserve:CategoryService,private active:ActivatedRoute) {


  }


  ngOnInit(): void {
    this.storessserve.cities().subscribe((res)=>{this.response1=res;this.cities=this.response1.Response

    })
   this.storessserve.profile({country_id:1}).subscribe((res)=>{this.response2=res;this.add=this.response2.Response.address
    this.country=this.response2.Response.country
      let loader=new Loader({apiKey:'AIzaSyCuU2Tnmy93AuQWWQ7DAGJT95OJKZYZdwY'})
      loader.load().then(() => {


      this. myLatlng = { lat:this.add.lat, lng:this.add.long };

       const map= this.map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
          center: this.myLatlng,    zoom: 4,

       });
      const marker= this. marker = new google.maps.Marker({
        position:this. myLatlng,
         map,
        title: "Click to zoom",
      });
      map.addListener("click", (mapsMouseEvent:any) => {

        this.data.lat= mapsMouseEvent.latLng.lat()
        this.data.lng=mapsMouseEvent.latLng.lng()
        this.marker.setPosition({lat:this.data.lat,lng:this.data.lng});

      });
     this. marker.addListener("click", () => {
        map.setZoom(8);
        map.setCenter(this.marker.getPosition() as google.maps.LatLng);
      });

     });

    })


   ////////////////////////////////////////////////////////
    if( this.active.snapshot.params['data']!='data'){
     //this.data= this.active.snapshot.params['data'].replace('*','#')
      this.flag=false
    console.log(( this.active.snapshot.params['data']))
    this.data=JSON.parse(this.active.snapshot.params['data'].replace('*','#'))
    this.data.update2=0}
    else this.flag=true
//     if( this.active.snapshot.params['data']!='data'){
//           console.log( (this.active.snapshot.params['data']))
  console.log((this.data))
//   // this.data=JSON.parse(this.active.snapshot.params['data'])
//    if(this.active.snapshot.params['colors'])
//    console.log((this.active.snapshot.params['colors']))
//   }else this.flag=true
     this.storessserve.mystores('en').subscribe((res)=>{this.response=res;this.stores=this.response.Response.stores})
    }
    // getposition(){
    //   let infoWindow = new google.maps.InfoWindow({
    //     content: "Click the map to get Lat/Lng!",
    //     position: this.myLatlng,

    //   });
    //   infoWindow = new google.maps.InfoWindow({
    //     position: mapsMouseEvent.latLng,
    //   });
    //   console.log(infoWindow)
    //   // window.setTimeout(() => {
    //   //   this.map.panTo(this.marker.getPosition() as google.maps.LatLng);
    //   // }, 6000);
    //   //      this.map.setZoom(8);
    //   // this.map.setCenter(this.marker.getPosition() as google.maps.LatLng);

    //   // var latlng = new google.maps.LatLng(-24.397, 140.644);
    //   // this.marker.setPosition(latlng);
    //   // this. marker = new google.maps.Marker({
    //   //   position: latlng,
    //   //   map: this.map,
    //   //   title: "Click to zoom",
    //   // });
    // }

  show(event:any){

   let value=(event.target.value)
   console.log(this.data)
   console.log(event.target.value)
    //if(value.slice(value.indexOf('+')+1)=='true'){
      this.route.navigateByUrl(`/me/profile/my-profile/select-category/${JSON.stringify(this.data)}`)


  }
  deleteitem(obj:any){
    console.log(this.data.colors)
    if(this.data.colors)
    this.data.colors.splice(this.data.colors.indexOf(obj),1)

  }
  changestyle(id:string){
    document.getElementById(id)!.style.color='black'
   console.log(this.data.store_name)
  }
  style(event:any){
    event.target.classList.add('removeborder')

  }
  displaylabel(id:string,store_id:number=0){
 let label=document.getElementsByClassName(id)[0].classList.remove('js-hide-label')
 let input= document.getElementsByClassName(id)[1]as HTMLInputElement


  }
  hidelabel(id:string){
    let input= document.getElementsByClassName(id)[1]as HTMLInputElement

    if(input.value==''){
        let label=document.getElementsByClassName(id)[0].classList.add('js-hide-label')

       }

   }
  getstore(id:string,e:any){
    let label=document.getElementsByClassName(id)[0].classList.remove('js-hide-label')
 let input= document.getElementsByClassName(id)[1]as HTMLInputElement

    // this.flag=true
    // this.data.store_name=name
    // this.data.properties=[]
    // this.data.category_name=[]
    // this.data.colors=[]
    // this.data.store_id=id
  for(let i=0;i<e.target.childNodes.length;i++){
   if(e.target.value==e.target.childNodes[i].value)
          this.data.store_id=e.target.childNodes[i].id
  }
   this.flag=true
    this.data.store_name=e.target.value
    this.data.properties=[]
    this.data.category_name=[]
    this.data.colors=[]
  }
  changecategory(id:number){
this.data.update=id
console.log(this.data.update)
this.route.navigateByUrl(`/home/me/profile/my-profile/select-category/${(JSON.stringify(this.data)).replace('#','*')}`)

  }
  changepro(){
    this.data.update2=this.data.category_ids[(this.data.category_ids.length)-1]
    this.route.navigateByUrl(`/home/me/profile/my-profile/select-category/${(JSON.stringify(this.data)).replace('#','*')}`)

  }
  navme(){

    this.route.navigateByUrl(`home/me/profile/my-profile/properity-color/${(JSON.stringify(this.data )).replaceAll('#','*')}`)

  }
  create(){
      let obj={
    en_name:this.data.title,
    ar_name:this.data.title,
    price:this.data.price,
    category_id:this.data.category_ids[(this.data.category_ids.length)-1],
    parent_id:this.data.category_ids[(this.data.category_ids.length)-(this.data.category_ids.length)],
    country_id:this.country.id,
    store_id:this.data.store_id,
    city_id:this.data.city_id,
    region_id:this.data.region_id,
    en_desc:this.data.desc,
    ar_desc:this.data.desc,
    is_online:this.data.is_online,
    properties:this.data.properties,
    colors:this.data.colors,
    latitude:this.data.lat,
    longitude:this.data.lng,
    mobile:this.data.mobile,




    }

  }

}
