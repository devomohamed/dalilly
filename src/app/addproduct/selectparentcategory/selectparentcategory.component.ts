import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { properity } from 'src/app/models/properity.model';
import { CategoryService } from 'src/app/service/category.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Color } from 'src/app/models/color.model';


@Component({
  selector: 'app-selectparentcategory',
  templateUrl: './selectparentcategory.component.html',
  styleUrls: ['./selectparentcategory.component.scss']
})
export class SelectparentcategoryComponent implements OnInit {
 mess!:string
  categories!: Category[]
  data!:any
  respose!:any
selectedcolor!:string
selectedcolorid?:number
 colors!:Color[]
 sizes!:[]
 next!:number

  properties!:properity[]
  i:number=0

  constructor(private catserve:CategoryService,private route:Router,private active:ActivatedRoute) {
     }


  ngOnInit(): void {

    this.data=this.active.snapshot.params['data']
  console.log(this.data)

    this.data=JSON.parse(this.data)
  //   if(this.data.store_flag==1)
  //  { this.catserve.all().subscribe((res)=>{this.respose=res
  //     this.categories=this.respose.Response
  // })}

if(this.data.update2==0&&(this.data.update==0||this.data.category_ids[0]==this.data.update))
{this.data.category_ids=[]
  this.data.category_name=[]
  delete (this.data.colors)
  delete(this.data.properties)
  if(this.data.store_id==0)
  {
     this.catserve.all().subscribe((res)=>{this.respose=res
      this.categories=this.respose.Response
  })}
  else{this.catserve.categories_store(this.data.store_id).subscribe((res)=>{
      this.respose=res
      this.categories=this.respose.Response
    })
  }}else{if(this.data.update2!=0){
    this.catserve.sub_categories(this.data.category_ids[(this.data.category_ids).indexOf(this.data.update2)-1]).subscribe(
    (res)=>{this.respose=res;
      let categories:Category[]
      categories=this.respose.Response
      this.data=JSON.parse(this.data)
      if(categories){for(let i=0;i<categories.length;i++){

        if(categories[i].id==this.data.update2){

          this.properties=categories[i].properties
        }
      }}
      this.data=JSON.stringify(this.data)
    })
}else {
  console.log(typeof(this.data))
  this.catserve.sub_categories(this.data.category_ids[(this.data.category_ids).indexOf(this.data.update)-1]).subscribe(
    (res)=>{this.respose=res;this.categories=this.respose.Response
    })
}
}
  this.data=JSON.stringify(this.data)
}
getid(id:number,has_category:boolean,name:string,prop:[],is_color:number,is_size:number,is_online:number){

  this.data=JSON.parse(this.data)
  if(this.data.store_flag==1){

   this.data.category_id=id,this.data.category_store_name=name

   this.route.navigateByUrl(`me/profile/stores/add-store/${JSON.stringify(this.data)}`)

  }
  if(this.data.offer_flag==1){

    this.data.category_id=id,this.data.category_store_name=name

    this.route.navigateByUrl(`me/profile/offers/offer-add/${JSON.stringify(this.data)}`)

   }

  if(this.data.update!=0)
 { this.data.category_name=this.data.category_name.slice(0,((this.data.category_ids).indexOf(this.data.update)),)

   this.data.category_ids=this.data.category_ids.slice(0,((this.data.category_ids).indexOf(this.data.update)),)
       delete (this.data.colors)
  delete(this.data.properties)
  this.data.update=0


} this.data=JSON.stringify(this.data)
    if(has_category==true){
    this.data=JSON.parse(this.data)
this.data.category_ids.push(id)
this.data.category_name.push(name)
this.data=JSON.stringify(this.data)
    this.catserve.sub_categories(id).subscribe(
        (res)=>{this.respose=res;this.categories=this.respose.Response})
     // this.i++
   //this.route.navigateByUrl(`me/profile/my-profile/select-category/${id}/${this.data}`)
  }
  else
 {
   if(prop.length==0){
   console.log(this.categories)
   this.data=JSON.parse(this.data)
  this.data.category_name.push(name)
  this.data.category_ids.push(id)
  this.data.properties=[]
  this.data.is_color=is_color
  this.data.is_size=is_size
  this.data.is_online=is_online
  this.data=JSON.stringify(this.data)
  if(is_color!=0||is_size!=0)
 {
    this.route.navigateByUrl(`me/profile/my-profile/properity-color/${this.data}`)
 }
  else this.route.navigateByUrl(`me/profile/my-profile/add_product/${this.data}`)
}else{this.properties=prop;


  // this.catserve.properities(id).subscribe(
  //   (res)=>{this.respose=res;
  //     this.sizes=this.respose.Response.sizes
  //     this.colors=this.respose.Response.colors
  //   })

  this.data=JSON.parse(this.data)
  this.data.category_name.push(name)
  this.data.category_ids.push(id)
  this.data.is_color=is_color
  this.data.is_size=is_size
  this.data.is_online=is_online
  this.data.properties=[]
  this.data=JSON.stringify(this.data)
  console.log((this.data))

}
}
}
//storedata(event:any,prop_id:number,option_id:number,i:number,j:number){console.log(event.target.value,prop_id)
 // let option={'id':prop_id,"mandatory":0,'name':event.target.value,'selected':event.target.checked,"type_id":0}

//}
submit(){
  console.log(this.data)
  let properities=[]
  let values=[]
  let options=[]
  let option

  let test=[]
 for(let i=0;i<this.properties.length;i++){
   for(let j=0;j<this.properties[i].options.length;j++){

     let input=document.getElementById(this.properties[i].options[j].id as unknown as string) as HTMLInputElement

     if(input!=null)
   {  if(input.checked){
       test.push(1)
      option={id:this.properties[i].options[j].id,"mandatory":0,name:this.properties[i].options[j].name,selected:1,type_id:this.properties[i].type_id}
      options.push(option)
      values.push(this.properties[i].options[j].id)
  //  { let p={id:this.properties[i].id,"mandatory":0,name:this.properties[i].name,
  //           options:{id:this.properties[i].options[j].id,"mandatory":0,name:this.properties[i].options[j].name,selected:1,type_id:this.properties[i].type_id},
  //           selected:1,type_id:this.properties[i].type_id,values:values.push(this.properties[i].options[j].id)}
  }else{
    option={id:this.properties[i].options[j].id,"mandatory":0,name:this.properties[i].options[j].name,selected:0,type_id:this.properties[i].type_id}
    options.push(option)
   // values.push(this.properties[i].options[j].id)
  }

  }

  }

   let p={id:this.properties[i].id,"mandatory":0,name:this.properties[i].name,
            options:options,
             selected:0,type_id:this.properties[i].type_id,value:values
          }
  properities.push(p)
  options=[]
  values=[]
  if(test.length==0)
  {this.next=1
    document.getElementsByClassName('activediv')[0]?.classList.remove('activediv')

    document.getElementById(this.properties[i].name)?.classList.add('activediv')
    break;
  }
  else{
    this.next=0
 test=[]
 }}
 if(this.next!=1)
{ this.data=JSON.parse(this.data)
  this.data.properties=properities
  if((this.data.is_color!=0||this.data.is_size!=0)&&this.data.update2==0)
  {
    this.data=JSON.stringify(this.data)
     this.route.navigateByUrl(`me/profile/my-profile/properity-color/${this.data}`)
  }
  else { if(this.data.edit)
   { let id=this.data.edit
     this.data=JSON.stringify(this.data)
    this.route.navigateByUrl(`me/profile/my-profile/edit-product/${id}/${this.data}`)

  }
    else
    {this.data=JSON.stringify(this.data)
      this.route.navigateByUrl(`me/profile/my-profile/add_product/${this.data}`)
} }
  }



  //this.route.navigateByUrl(`me/profile/my-profile/add_product/${this.data}`)

}

}
