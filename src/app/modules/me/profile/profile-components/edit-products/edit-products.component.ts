import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { Category } from 'src/app/models/category.model';
import { City } from 'src/app/models/city.model';
import { Country } from 'src/app/models/country.model';
import { Store } from 'src/app/models/store.model';
import { CategoryService } from 'src/app/service/category.service';
import { UserService } from 'src/app/service/user.service';
import { Loader } from '@googlemaps/js-api-loader';
import { Address } from 'src/app/models/addresss.model';
import { Product } from 'src/app/models/product.model';


@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.scss']
})
export class EditProductsComponent implements OnInit {
  mydata?:any
  counter=0
  selectedfile!: File;
  imageSrc:any[]=[]
  flag!:any
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
  update2:0,
  

 
    
}
map:any
marker!:any
  response!:any
  response1!:any
  response2:any
  add!:Address
  cities!:City[]
  stores!:Store[]
  categories!: Category[]
  subcategories!:Category[]
  id!:number
  respose1!:any
  country!:Country
  result:any
  myLatlng !:any 
  temp!:number
  note!:string
 
  constructor(private route:Router,private storessserve:UserService,private catserve:CategoryService,private active:ActivatedRoute) { }
    

  ngOnInit(): void {
    console.log('fkfkfkfklrkrktktk')
    this.storessserve.product_detailes(this.active.snapshot.params['id']) .subscribe((res)=>{this.response2=res;
      this.country=this.response2.Response.country;console.log(res)
      let loader=new Loader({apiKey:'AIzaSyCuU2Tnmy93AuQWWQ7DAGJT95OJKZYZdwY'})
      loader.load().then(() => {
        
       
      this. myLatlng = { lat:this.response2.Response.latitude, lng:this.response2.Response.longitude };
       
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
    console.log(this.imageSrc)
    this.data.id=this.active.snapshot.params['id'] 
    if(this.storessserve.product_data&&this.data.id==this.storessserve.product_data.id){
      this.data=this.storessserve.product_data;console.log(this.data)
     if(localStorage.getItem('imgs'))
      { for(let i=0;i<10;i++){
       this.imageSrc=JSON.parse(localStorage.getItem(`imgs`)as string)
       if(this.imageSrc[i])
       {
         document.getElementById(`img${i}`)!.style.display='block'
 }
      }}
        }
else{ 
  localStorage.removeItem('imgs')
this.setdata()
console.log(this.data)
}  
//  if(localStorage.getItem('imgs'))
// {this.imageSrc=JSON.parse(localStorage.getItem('imgs')||'{}')
// for(let i=0;i<this.imageSrc.length;i++)
// document.getElementById(`img${i}`)!.style.display='block'
 
// }
    // this.storessserve.cities().subscribe((res)=>{this.response1=res;this.cities=this.response1.Response
      
    // })
  

  }
  show(event:any){
 
    let value=(event.target.value)
    console.log(this.data)
    console.log(event.target.value)
    this.storessserve.product_data=this.data
     //if(value.slice(value.indexOf('+')+1)=='true'){
       this.route.navigateByUrl(`/home/me/profile/my-profile/select-category/${JSON.stringify(this.data)}`)
 
       
   }
   deleteitem(obj:any){
     console.log(this.data.colors)
     if(this.data.colors)
     this.data.colors.splice(this.data.colors.indexOf(obj),1)
      this.storessserve.product_data=this.data
   }
   changestyle(id:string){
     document.getElementById(id)!.style.color='black'
    
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
 this.storessserve.product_data=this.data
 this.route.navigateByUrl(`/home/me/profile/my-profile/select-category/${(JSON.stringify(this.data)).replace('#','*')}`)
 
   }
   changepro(){
    this.data.edit=this.active.snapshot.params['id']
     this.data.update2=this.data.category_ids[(this.data.category_ids.length)-1]
     this.storessserve.product_data=this.data
     console.log(this.data)
     this.route.navigateByUrl(`/home/me/profile/my-profile/edit-properities`)
 
   }
   navme(){
     this.storessserve.product_data=this.data
     this.route.navigateByUrl(`home/me/profile/my-profile/edit-color_size`)
 
   }
   getcity(){
   

    console.log((this.response2 ))
  this.mydata=this.data
    this.storessserve.product_data=this.data
    this.storessserve.product_data.routation=0
  this.route.navigateByUrl(`/home/me/profile/cities/data`)
   }
   selectedFile(event:any){
    this.selectedfile= <File> event.target.files[0]
   let image
  //this.storessserve.getimage(this.selectedfile)
  this.storessserve.files.push(this.selectedfile)
  console.log(this.storessserve.files)
   if (event.target.files && event.target.files[0]) {
    const file = event.target.files[0];

    const reader = new FileReader();
    reader.onload = e => {image = reader.result;
   console.log(image)
    image=URL.createObjectURL(event.target.files[0])
    this.imageSrc.push(image)
    for(let i=0;i<this.imageSrc.length;i++)
  document.getElementById(`img${i}`)!.style.display='block'
    localStorage.setItem('imgs',JSON.stringify(this.imageSrc))
    let imgs=localStorage.getItem('imgs')
  
}
    reader.readAsDataURL(file);
}

  }
  count(){
    this.counter++
  }
  delete(index:number){
    
    this.storessserve.files.splice(index,1)
    
     if(index==this.imageSrc.length-1)
     
    document.getElementById(`img${index}`)!.style.display='none'
       else document.getElementById(`img${this.imageSrc.length-1}`)!.style.display='none'
       this.imageSrc.splice(index,1)
       localStorage.setItem('imgs',JSON.stringify(this.imageSrc))
       if(this.response2.Response.images[index])
       this.storessserve.delete_image(this.response2.Response.images[index].id).subscribe((res)=>{console.log(res)})
   
   
   
  }
  edit(){
    
  let fd=new FormData();
  fd.append('en_name',this.data.title)
  fd.append('ar_name',this.data.title,)
  fd.append('price',this.data.price as unknown as string)
  fd.append('category_id',this.data.category_ids[(this.data.category_ids.length)-1],
  )
  console.log(this.data)
  fd.append('parent_id',this.data.category_ids[(this.data.category_ids.length)-(this.data.category_ids.length)],
  )
   fd.append( 'country_id',this.country.id as unknown as string)
  fd.append('store_id',this.data.store_id as unknown as string)
  fd.append( 'city_id',this.data.city_id as unknown as string)
  fd.append('region_id',this.data.region_id as unknown as string)
  fd.append('region_id',this.data.region_id as unknown as string)
  fd.append( 'en_desc',this.data.desc)
  fd.append( 'ar_desc',this.data.desc)
  
  fd.append('is_online',this.data.is_online as unknown as string)
  if(this.data.properties)
  fd.append('properties',JSON.stringify(this.data.properties))
  if(this.data.colors)
 {this.data.quantity=0
   for(let i=0 ;i< this.data.colors.length;i++ ){
   this.data.quantity  +=this.data.colors[i].quantity
 } 

 
    fd.append('colors',JSON.stringify(this.data.colors ))
    fd.append('quantity',this.data.quantity as unknown as string)
 
  }
  else
  {if(this.data.is_online==1) fd.append('quantity',this.data.quantity as unknown as string)
 
   else fd.append('quantity',1 as unknown as string  )
 }
  fd.append('latitude',this.data.lat as unknown as string)
  fd.append('longitude',this.data.lng as unknown as string)
  fd.append('mobile',this.data.mobile as unknown as string)
  fd.append('id',this.active.snapshot.params['id'])
  {for(let i=0;i<this.storessserve.files.length;i++){
   fd.append(`image${i+1}`,this.storessserve.files[i])
    
  }}
  this.storessserve.update_product(fd).subscribe((res)=>{console.log(res)
    var modal = document.getElementById("myModal")!;
          modal.style.display = "block"
  })  
      
}
close(){
  var modal = document.getElementById("myModal")!;
        
var span = document.getElementsByClassName("close")[0];
modal.style.display = "none";
}
upgrade(){
  this.route.navigateByUrl(`/home/me/profile/my-profile`)
}
toggleonline(){
  if(this.data.is_online==1)
  this.data.is_online=0
  else this.data.is_online=1 
 }
setdata(){
 console.log('llkkkkkk')
    
// this.imageSrc[0]=`https://dalilisouq.com/${this.response2.Response.image}`
// document.getElementById(`img${0}`)!.style.display='block'
this.storessserve.product_detailes(this.active.snapshot.params['id']) .subscribe((res)=>{this.response2=res;
  console.log(res)
  this.data.routation=0
  //this.imageSrc.push(`https://dalilisouq.com/${this.response2.Response.image}`)
  if(this.response2.Response.is_online==1)
   {this.temp=1
    this.data.is_online=1
     this.data.note=this.response2.Response.note}
   else {console.log(this.response2.Response.note)
    this.data.is_online=0
     this.data.note=this.response2.Response.note}
       
for(let i=0;i<10;i++){

if(this.response2.Response.images.length>i)
{this.imageSrc.push(`https://dalilisouq.com/${this.response2.Response.images[i].image}`)
console.log(this.imageSrc)
document.getElementById(`img${i}`)!.style.display='block'
localStorage.setItem('imgs',JSON.stringify(this.imageSrc))
}}
  this.add=this.response2.Response.address
  this.data.product_flag=1
 this.data.title=this.response2.Response.name
 this.data.desc=this.response2.Response.desc
 this.data.price=(this.response2.Response.price) 
 this.data.mobile=this.response2.Response.mobile
 this.data.city_id=this.response2.Response.city.id
 this.data.is_color=this.response2.Response.category.is_color
 this.data.is_size=this.response2.Response.category.is_size
 this.data.is_online=this.response2.Response.is_online
 if(this.response2.Response.quantity){
  this.data.quantity=this.response2.Response.quantity
 }
 //this.data.link=this.response2.Response.video
 this.data.city_name=this.response2.Response.city.name + '-' +this.response2.Response.region.name
 this.data.category_name.push(this.response2.Response.category.name)
 let ids:any
 let ids2:any[]=[]
 if(this.response2.Response.category){
   ids=this.response2.Response.category
   
  this.data.category_ids.push(ids.id)
   while(ids.hasOwnProperty('category')&&ids.category.hasOwnProperty('id')){
    
     ids2.push(ids.id)
   
     ids=ids.category
     if(ids.category&&Object.keys(ids.category).length === 0)
     break
     
   }
   ids2.push(ids.id)
   this.data.category_ids=ids2
   this.data.category_ids=this.data.category_ids.reverse()

 }console.log(this.data.category_ids)
 if(this.response2.Response.colors){
   this.data.colors=this.response2.Response.colors
 }
 if(this.response2.Response.properties){
   this.data.properties=this.response2.Response.properties
   console.log(this.data.properties)
 }

 this.storessserve.product_data=this.data
 console.log(this.data)

console.log(this.response2.Response.images)
// this.country=this.response2.Response.country;console.log(res)
//     let loader=new Loader({apiKey:'AIzaSyCuU2Tnmy93AuQWWQ7DAGJT95OJKZYZdwY'})
//     loader.load().then(() => {
      
     
//     this. myLatlng = { lat:this.response2.Response.latitude, lng:this.response2.Response.longitude };
     
//      const map= this.map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
//         center: this.myLatlng,    zoom: 4,
     
//      });
//     const marker= this. marker = new google.maps.Marker({
//       position:this. myLatlng,
//        map,
//       title: "Click to zoom",
//     });
//     map.addListener("click", (mapsMouseEvent:any) => {
    
//       this.data.lat= mapsMouseEvent.latLng.lat()
//       this.data.lng=mapsMouseEvent.latLng.lng()
//       this.marker.setPosition({lat:this.data.lat,lng:this.data.lng});
    
//     });
//    this. marker.addListener("click", () => {
//       map.setZoom(8);
//       map.setCenter(this.marker.getPosition() as google.maps.LatLng);
//     });
    
//    });
   
   })
 // this.storessserve.mystores('en').subscribe((res)=>{this.response=res;this.stores=this.response.Response.stores})



}

  


 

}
