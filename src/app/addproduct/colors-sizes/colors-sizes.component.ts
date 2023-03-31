import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Color } from '../../models/color.model';
import { CategoryService } from '../../service/category.service';

@Component({
  selector: 'app-colors-sizes',
  templateUrl: './colors-sizes.component.html',
  styleUrls: ['./colors-sizes.component.scss']
})
export class ColorsSizesComponent implements OnInit {
  data!:any
  respose!:any
selectedcolor?:string
selectedcolorid?:number
 
colors!:Color[]
 selectedsize?:string
 selectedsizeid!:string
 quantity=1
 objectofcolor:any[]=[]
 colorobject!:any
added!:number
 sizes!:[]
  constructor(private catserve:CategoryService,private route:Router,private active:ActivatedRoute) {
     
    this.data=this.active.snapshot.params['data']
    
   
    
   
  }

  ngOnInit(): void {
   this.data= this.data.replaceAll('*','#')
    this.data=JSON.parse(this.data)
    console.log(this.data.category_ids[(this.data.category_ids.length)-1])
    this.catserve.properities(this.data.category_ids[(this.data.category_ids.length)-1]).subscribe(
      (res)=>{this.respose=res;
        this.sizes=this.respose.Response.sizes
        this.colors=this.respose.Response.colors
        
        
      })
      console.log(this.data)
      if(this.data.colors)this.objectofcolor=this.data.colors
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
    
   
      if(this.data.is_color!=0&&this.data.is_size!=0)
    {if(this.selectedsize&&this.selectedcolor){
     
     this.colorobject={color:this.selectedcolor,quantity:this.quantity,size:this.selectedsize}
      this.objectofcolor.push(this.colorobject)
      document.getElementsByClassName('activesize')[0].classList.remove('activesize')
      document.getElementsByClassName('activecolor')[0].classList.remove('activecolor')
  
    }
    }
    else{
      if(this.data.is_color==0){
        if(this.selectedsize){
     
          this.colorobject={color:this.selectedcolor,quantity:this.quantity,size:this.selectedsize}
           this.objectofcolor.push(this.colorobject)
           document.getElementsByClassName('activesize')[0].classList.remove('activesize')
    
         }
      }
      if(this.data.is_size==0){
        if(this.selectedcolor){
     
          this.colorobject={color:this.selectedcolor,quantity:this.quantity,size:this.selectedsize}
           this.objectofcolor.push(this.colorobject)
           document.getElementsByClassName('activecolor')[0].classList.remove('activecolor')
          
         }
      }
    }
   
  }
  addplus(){
    
  
    if(this.selectedsize){
     
     this.colorobject={color:this.selectedcolor,quantity:this.quantity,size:this.selectedsize}
     this.objectofcolor=[]
     this.objectofcolor.push(this.colorobject)
      document.getElementsByClassName('activesize')[0].classList.remove('activesize')
      
     
    }
    else {if(this.selectedcolor){
     
      this.colorobject={color:this.selectedcolor,quantity:this.quantity,size:this.selectedsize}
      this.objectofcolor=[]
      this.objectofcolor.push(this.colorobject)
      
       document.getElementsByClassName('activecolor')[0].classList.remove('activecolor')
      
     }}
    
  }
  deleteitem(obj:object){
    console.log(this.objectofcolor.indexOf(obj))
    this.objectofcolor.splice(this.objectofcolor.indexOf(obj),1)

  }
  submit(){
// console.log(JSON.stringify(this.object))
// console.log(typeof(JSON.stringify(this.object)))
  
  console.log(this.data)
  this.data.colors=this.objectofcolor
  console.log(this.data)
//      //this.data.colors={colors:this.object}
//   //   JSON.stringify(this.data.colors)
 this.data=JSON.stringify(this.data)

    this.route.navigateByUrl(`home/me/profile/my-profile/add_product/${this.data.replaceAll('#','*')}`)
  }

}
