import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-active-ads',
  templateUrl: './active-ads.component.html',
  styleUrls: ['./active-ads.component.scss']
})
export class ActiveAdsComponent implements OnInit {

  response!:any
  Ads!:Product[]
  flag=0
  term=''
    constructor(private Adsserve:UserService) { }
  
    ngOnInit(): void {
      this.Adsserve.Ads(this.term).subscribe((res)=>{console.log(res); this.response=res;this.Ads=this.response.Response.active.data;})
    }
    getproducts(){
      this.Adsserve.Ads(this.term).subscribe((res)=>{console.log(res); this.response=res;this.Ads=this.response.Response.active.data;})

    }
    shrink(){
  this.flag=0
    }
   spread(){
      this.flag=1
        }
  
        close(){
          //this.getproducts()
         if(this.term!='')
         {document.getElementById('icon')?.classList.remove('fa-times')
         document.getElementById('icon')?.classList.remove('fa')
        
         document.getElementById('icon')?.classList.add('porto-icon-search-3') 
       }
         else{document.getElementById('icon')?.classList.remove('porto-icon-search-3')
         console.log(document.getElementById('icon'))
         document.getElementById('icon')?.classList.add('fa') 
         document.getElementById('icon')?.classList.add('fa-times') 
       }
        }
        search(){
         //this.getproducts()
          if(this.term=='')
         {document.getElementById('icon')?.classList.remove('fa-times')
         document.getElementById('icon')?.classList.remove('fa')
        
         document.getElementById('icon')?.classList.add('porto-icon-search-3') 
       }
       
        }
        toggle(){
         this.getproducts()
          if( document.getElementById('icon')?.classList.contains('fa')){
              this.term=''
              document.getElementById('icon')?.classList.remove('fa-times')
         document.getElementById('icon')?.classList.remove('fa')
        
         document.getElementById('icon')?.classList.add('porto-icon-search-3') 
       
          }
          this.getproducts()
         
        }

}
