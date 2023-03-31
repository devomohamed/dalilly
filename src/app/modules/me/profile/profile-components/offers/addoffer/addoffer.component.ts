import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from 'src/app/models/addresss.model';

import { Category } from 'src/app/models/category.model';
import { City } from 'src/app/models/city.model';
import { Country } from 'src/app/models/country.model';
import { Product } from 'src/app/models/product.model';
import { Store } from 'src/app/models/store.model';
import { CategoryService } from 'src/app/service/category.service';
import { UserService } from 'src/app/service/user.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-addoffer',
  templateUrl: './addoffer.component.html',
  styleUrls: ['./addoffer.component.scss']
})
export class AddofferComponent implements OnInit {

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

  id!:number
  respose1!:any
  response2!:any
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

  flag!:boolean
  selectedfile?:File
  imageSrc?: any;
  constructor(private route:Router,private storessserve:UserService,private catserve:CategoryService,private active:ActivatedRoute) { }

  ngOnInit(): void {
    this.storessserve.mystores('en').subscribe((res)=>{this.response=res;this.stores=this.response.Response.stores})

    this.imageSrc=localStorage.getItem('img')
    if(this.active.snapshot.params['data']!='data'){

     this. data=JSON.parse(this.active.snapshot.params['data'])


      if(this.data.category_name)
    {
       this.data.category_id=this.data.category_id
     this.data.category_store_name=this.data.category_store_name}
     if(this.data.city_id&&!this.data.region_id){
       this.data.city_id=this.data.city_id
       this.data.city_name=this.data.city_name
     }
     if(this.data.city_id&&this.data.region_id){
      this.data.city_id=this.data.city_id
      this.data.city_name=this.data.city_name +'-'+this.data.region_name
      this.data.region_id=this.data.region_id
     }
    }

    this.storessserve.cities().subscribe((res)=>{this.response1=res;this.cities=this.response1.Response

    })
    this.storessserve.profile({country_id:1}).subscribe((res)=>{this.response2=res;this.add=this.response2.Response.address
      this.country=this.response2.Response.country
      this.getmap()
    //   //   // let loader=new Loader({apiKey:'AIzaSyCuU2Tnmy93AuQWWQ7DAGJT95OJKZYZdwY'})
    //   //   // loader.load().then(() => {


    //   //   //  this.map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    //   //   //    center: { lat:this.add.lat, lng:this.add.long },
    //   //   //    zoom: 8,

    //   //   //  });
    //   //  });
      })
  }
  show(event:any){
       this.data.offer_flag=1
      this.route.navigateByUrl(`/me/profile/my-profile/select-category/${JSON.stringify(this.data)}`)

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
   create(){


    let obj={
      en_name:this.data.name,
      ar_name:this.data.name,

      region_id:this.data.region_id,
      city_id:this.data.city_id,
      en_desc:this.data.desc,
      ar_desc:this.data.desc,
      category_id:this.data.category_id,
      store_id:this.data.store_id,
      is_active:0,


     }
     const fd=new FormData();
     fd.append('en_name',this.data.name)
     fd.append(' ar_name',this.data.name)
     fd.append('region_id',this.data.region_id as unknown as string)
     fd.append(' city_id',this.data.city_id as unknown as string)
     fd.append(' en_desc',this.data.desc)
     fd.append('ar_desc',this.data.desc)
     fd.append('category_id',this.data.category_id as unknown as string)
     fd.append(' store_id',this.data.store_id as unknown as string)
     fd.append('is_active',0 as unknown as string)
     this.storessserve.offer_create(fd).subscribe((res)=>{

       console.log(res)
         })
    this.route.navigateByUrl('/me/profile/offers/add-package')


   }
   getcity(){
    this.route.navigateByUrl(`/me/profile/cities/${JSON.stringify(this.data)}`)

   }
   selectedFile(event:any){
    this.selectedfile= <File> event.target.files[0]
    //  const fd=new FormData();
    //     fd.append('image',this.selectedfile)
    //     console.log(fd.getAll('image'))
  this.storessserve.getimage(this.selectedfile)
   if (event.target.files && event.target.files[0]) {
    const file = event.target.files[0];

    const reader = new FileReader();
    reader.onload = e => {this.imageSrc = reader.result;
   // this.data.store_img=this.selectedfile
    this.imageSrc=URL.createObjectURL(event.target.files[0])
    localStorage.setItem('img',this.imageSrc)
   console.log(this.data)
}
    reader.readAsDataURL(file);
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

    this.data.category_store_name=''

  }
  // //////////////////////////////////////////
  getmap(){
    let map=this.map= new L.Map('map').setView([this.data.lat ||0, this.data.lng||0],10);
    var marker=this.marker = L.marker([this.add.lat, this.add.long]).addTo(map)

    console.log(this.data.lng,this.data.lat)

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
this.data.lat=lat,
this.data.lng=lon

     })

  }
  movemarker(){
    this.map.remove()
    let map=this.map= new L.Map('map').setView([this.data.lat ||0, this.data.lng||0],10);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 10,
      attribution: '© OpenStreetMap'
    }).addTo(this.map)
   this. map.removeLayer(this.marker);
    let lat=0;let lng=0
   lat =this.data.lat ||0
    lng=this.data.lng ||0
    console.log(lat,lng)
  this.marker =  L.marker([lat,lng]).addTo(this.map);




  }




}
