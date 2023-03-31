import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Color } from 'src/app/models/color.model';
import { CategoryService } from 'src/app/service/category.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-edit-colors-sizes',
  templateUrl: './edit-colors-sizes.component.html',
  styleUrls: ['./edit-colors-sizes.component.scss']
})
export class EditColorsSizesComponent implements OnInit {
data=this.userserve.product_data
  selectedcolor?:string
  selectedcolorid?:number

  colors?:Color[]
   selectedsize?:string
   selectedsizeid!:string
   quantity=1
   objectofcolor:any[]=[]
   colorobject!:any
  added!:number
   sizes!:[]
  respose: any;
    constructor(private catserve:CategoryService,private route:Router,private active:ActivatedRoute,private userserve:UserService) {}


  ngOnInit(): void {
    console.log(this.userserve.product_data)
    this.catserve.properities(this.data.category_ids[(this.userserve.product_data.category_ids.length)-1]).subscribe(
      (res)=>{this.respose=res;
        console.log(res)
        this.sizes=this.respose.Response.sizes
        this.colors=this.respose.Response.colors


      })
    //this.sizes=this.userserve.product_data.

    this.colors=this.userserve.product_data.colors

    if(this.userserve.product_data.colors)this.objectofcolor=this.userserve.product_data.colors

  }
  getcolor(color:string,id:number){this.selectedcolor=color;
    //this.selectedcolorid=0;this.selectedcolorid=id
    if( document.getElementsByClassName('activecolor')[0])
    document.getElementsByClassName('activecolor')[0].classList.remove('activecolor')

   document.getElementById(id as unknown as string )?.classList.add('activecolor')


  }
  getsize(size:string){
    this.selectedsize=size
    if(document.getElementsByClassName('activesize')[0])
     document.getElementsByClassName('activesize')[0].classList.remove('activesize')

    document.getElementById(size)?.classList.add('activesize')



  }
  min(){
    if(this.quantity>1)
      this.quantity--
  }
  plus(){
this.quantity++
  }
  add(){


    if(this.userserve.product_data.is_color!=0&&this.userserve.product_data.is_size!=0)
  {if(this.selectedsize&&this.selectedcolor){

   this.colorobject={color:this.selectedcolor,quantity:this.quantity,size:this.selectedsize}
    this.objectofcolor.push(this.colorobject)
    document.getElementsByClassName('activesize')[0].classList.remove('activesize')
    document.getElementsByClassName('activecolor')[0].classList.remove('activecolor')

  }
  }
  else{
    if(this.userserve.product_data.is_color==0){
      if(this.selectedsize){

        this.colorobject={color:'',quantity:this.quantity,size:this.selectedsize}
         this.objectofcolor.push(this.colorobject)
         document.getElementsByClassName('activesize')[0].classList.remove('activesize')

       }
    }
    if(this.userserve.product_data.is_size==0){
      if(this.selectedcolor){

        this.colorobject={color:this.selectedcolor,quantity:this.quantity,size:''}
         this.objectofcolor.push(this.colorobject)
         document.getElementsByClassName('activecolor')[0].classList.remove('activecolor')

       }
    }
  }

}
addplus(){


  if(this.data.is_color!=0&&this.data.is_size!=0){
    this.colorobject={color:this.selectedcolor,quantity:this.quantity,size:this.selectedsize}
   this.objectofcolor=[]
   this.objectofcolor.push(this.colorobject)
    document.getElementsByClassName('activesize')[0].classList.remove('activesize')

  }
 else
  {if(this.data.is_color==0){

   {this.colorobject={color:'',quantity:this.quantity,size:this.selectedsize}
   this.objectofcolor=[]
   this.objectofcolor.push(this.colorobject)
    document.getElementsByClassName('activesize')[0].classList.remove('activesize')
    }

  }
  else {if(this.data.is_size==0){

    this.colorobject={color:this.selectedcolor,quantity:this.quantity,size:''}
    this.objectofcolor=[]
    this.objectofcolor.push(this.colorobject)

     document.getElementsByClassName('activecolor')[0].classList.remove('activecolor')

   }}
  }

}
deleteitem(obj:object){
  console.log(this.objectofcolor.indexOf(obj))
  this.objectofcolor.splice(this.objectofcolor.indexOf(obj),1)

}
submit(){


this.userserve.product_data.colors=this.objectofcolor



   if(this.userserve.product_data.routation==1)
  this.route.navigateByUrl(`/me/my-advertising/edit-product/${this.userserve.product_data.id}`)

if(this.userserve.product_data.routation==0)
this.route.navigateByUrl(`/me/profile/my-profile/edit-product/${this.userserve.product_data.id}`)
if(this.userserve.product_data.routation==2)
this.route.navigateByUrl(`/me/my-advertising/edit-expire/${this.userserve.product_data.id}`)
if(this.userserve.product_data.routation==3)
this.route.navigateByUrl(`/me/my-advertising/edit-passive/${this.userserve.product_data.id}`)
if(this.userserve.product_data.routation&&this.userserve.product_data.routation==4)
this.route.navigateByUrl(`/me/store/${this.userserve.product_data.store_id}/edit-product/${this.userserve.product_data.id}`)

}
back(){
  console.log(this.userserve.product_data)
//if(this.data.edit)
  {
    //if(this.storessserve.product_data.routation&& this.storessserve.product_data.routation==0)
  //this.route.navigateByUrl(`/me/profile/my-profile/edit-product/${this.storessserve.product_data.id}`)
 // this.route.navigateByUrl(`/me/profile/my-profile/edit-product/${this.storessserve.product_data.id}`)
   if(this.userserve.product_data.routation&&this.userserve.product_data.routation==1)
   this.route.navigateByUrl(`/me/my-advertising/edit-product/${this.userserve.product_data.id}`)
   if(this.userserve.product_data.routation&&this.userserve.product_data.routation==2)
   this.route.navigateByUrl(`/me/my-advertising/edit-expire/${this.userserve.product_data.id}`)
   if(this.userserve.product_data.routation&&this.userserve.product_data.routation==3)
   this.route.navigateByUrl(`/me/my-advertising/edit-passive/${this.userserve.product_data.id}`)
   if(this.userserve.product_data.routation&&this.userserve.product_data.routation==4)
   this.route.navigateByUrl(`/me/store/${this.userserve.product_data.store_id}/edit-product/${this.userserve.product_data.id}`)

  } // else   {
    if(this.userserve.product_data.routation&&this.userserve.product_data.routation==4)
    this.route.navigateByUrl(`/me/store/${this.userserve.product_data.store_id}/edit-product/${this.userserve.product_data.id}`)

// this.route.navigateByUrl(`/me/profile/my-profile/add_product/${this.data}`)
  // }
}

}
