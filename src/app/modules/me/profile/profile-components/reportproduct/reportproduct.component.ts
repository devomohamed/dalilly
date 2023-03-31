import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { CategoryService } from 'src/app/service/category.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-reportproduct',
  templateUrl: './reportproduct.component.html',
  styleUrls: ['./reportproduct.component.scss']
})

export class ReportproductComponent implements OnInit {
  product_id!:number
  mess!:string
  report_response!:any
  allreports!:any[]
  response!:any
  product!:Product
  response_mess!:any

  constructor(private categoryserve:CategoryService,private active:ActivatedRoute,private userservice:UserService) {
    this.product_id=this.active.snapshot.params['product_id']
   }

  ngOnInit(): void {
   // document.getElementById('cont')!.scrollTop=document.getElementById('cont')!.scrollHeight
       
    
    this.categoryserve.getoneproduct(this.product_id).subscribe((res)=>{
      this.response=res;this.product=this.response.Response
      console.log(res)
       
    })
   
    this.userservice.allreport(this.product_id).subscribe((res)=>{this.report_response=res;this.allreports=this.report_response.Response;console.log(this.allreports)
    // //
      
       
    })
   let t= setInterval(()=>{
      if(document.getElementsByClassName('card-body')[0]!.scrollTop==0)
      {console.log('fifi',document.getElementsByClassName('card-body')[0]!.scrollHeight)
        document.getElementsByClassName('card-body')[0]!.scrollTop=document.getElementsByClassName('card-body')[0]!.scrollHeight
    }
    else{
      clearInterval(t)
    }
    },1800)
  
   
   
  }
  geth(){
    console.log(
      document.getElementsByClassName('card-body')[0]!.scrollTop)
 
  }
  report(){
    this.userservice.report(this.product_id,this.mess).subscribe((res)=>{
       this.response_mess=res
       this.allreports.push({'desc':this.response_mess.Response.desc,admin_id:0})
    
   
       this.mess=''
      console.log(res)

      })
      let t= setInterval(()=>{
        if(document.getElementsByClassName('card-body')[0]!.scrollTop==document.getElementsByClassName('card-body')[0]!.scrollHeight)
        { clearInterval(t)
              }
      else{
        document.getElementsByClassName('card-body')[0]!.scrollTop=document.getElementsByClassName('card-body')[0]!.scrollHeight
 
      }
      },1000)

  }

}
