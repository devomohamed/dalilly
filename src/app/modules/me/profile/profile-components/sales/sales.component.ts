import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {
response!:any
sales!:any
page=1
pages!:number[]

  constructor(private sale:UserService,private route:Router) { }

  ngOnInit(): void {
    this.sale.mysales(this.page).subscribe((res)=>{this.response=res;
      this.sales=this.response.Response.orders.data;
      console.log(res)
      this.pages=[]
      for(let i =0;i<  this.response.Response.orders.last_page;i++){
        this.pages.push(i+1)
      }
  //   if(this.sales){ while(this.page<=10)
  //   {   this.page++
  //  this.sale.mysales(this.page).subscribe((res)=>{this.response=res;
  //    let sales=this.response.Response.orders.data;
  //    this.sales=this.sales.concat(sales)

  //     console.log(sales.length)})

  //     }}
    })
  }
  paginate(page:number){
    document.getElementById('load')!.style.display='block'

    this.page=page
    this.sale.mysales(this.page).subscribe((res)=>{this.response=res;
      this.sales=this.response.Response.orders.data;
      document.getElementById('load')!.style.display='none'

      this.pages=[]
      for(let i =0;i<  this.response.Response.orders.last_page;i++){
        this.pages.push(i+1)
      }
    })

  }
  details(id:number){
    this.route.navigateByUrl(`/me/profile/saledetailes/${id}`)
  }

}
