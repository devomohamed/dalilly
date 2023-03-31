import { Component, ViewEncapsulation , ViewChild , Input, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
// import { ProductsService } from 'src/app/shared/Services/products.service';
import SwiperCore, { SwiperOptions } from 'swiper';
import { Navigation, Pagination, Scrollbar, A11y , Autoplay, Grid } from 'swiper';
import { SwiperComponent } from "swiper/angular";
import { ProductsService } from '../../service/products.service';
import { Router } from '@angular/router';

SwiperCore.use([Grid, Pagination]);

@Component({
  selector: 'app-home-products',
  templateUrl: './home-products.component.html',
  styleUrls: ['./home-products.component.scss']
})
export class HomeProductsComponent implements OnInit {

  products:any
  idActive:any = -1
  idSub:any
  categoryId:any;
  @Input() categoryAllData:any
  subName:string = ''
  domain:string = "https://dalilisouq.com/"
  categoryName:string='CategoryName'
  config: SwiperOptions = {
    slidesPerView: 5,
    spaceBetween: 10,
    navigation: true,
    // loop:true,
    // autoplay:{
    //   delay:1000
    // },
    grid:{
      rows:2,
      fill: "row"
    },
    scrollbar: { draggable: true },
    breakpoints: {
      // when window width is >= 320px
      0: {
        slidesPerView: 1,
        // spaceBetween: 20
      },
      // when window width is >= 320px
      576: {
        slidesPerView: 2,
        // spaceBetween: 20
      },
      // when window width is >= 320px
      750: {
        slidesPerView: 3,
        // spaceBetween: 20
      },
      // when window width is >= 480px
      992: {
        slidesPerView: 5,
        // spaceBetween: 30
      },
      // when window width is >= 640px
      1200: {
        slidesPerView: 6,
        // spaceBetween: 10
      }
    }
  };

  constructor(
    private categoryServies:CategoryService,
    private productsService:ProductsService,
    private router:Router) { }

  changeActive(i:any,id:any){
    this.idActive = i
    this.idSub = id
    this.checkSelected()
  }

  redirectByCat(){
    console.log(this.categoryId);

    this.router.navigate(['/all-ads'], {queryParams: {catId:this.categoryAllData.id}})
  }

  checkSelected(){
    if(this.idActive == -1){
      this.getProducts({
        categories:[this.categoryAllData.id]
      })

    }else{
      this.getProducts({
        categories:[this.idSub]
      })
    }
  }

  getProducts(data:any){
    this.productsService.getProductByFormData(data).subscribe((res:any)=>{
      // console.log(res.Response);
      this.products = res.Response.products.data
    },(error:any)=>{
      console.log(error);
    })
  }

  ngOnInit(): void {
    this.checkSelected()
  }

}
