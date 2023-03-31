import { Data } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import SwiperCore, { SwiperOptions } from 'swiper';
import { Navigation, Pagination, Scrollbar, A11y , Autoplay } from 'swiper';
import { ProductsService } from '../../service/products.service';

SwiperCore.use([Autoplay])

@Component({
  selector: 'app-sub-categorries',
  templateUrl: './sub-categorries.component.html',
  styleUrls: ['./sub-categorries.component.scss']
})
export class SubCategorriesComponent implements OnInit {

  @Input() subCategoryId:any
  @Input() name:any
  data:any
  config: SwiperOptions = {
    slidesPerView: 15,
    spaceBetween: 20,
    navigation: true,
    loop:true,
    autoplay:{
      delay:3000
    },
    scrollbar: { draggable: true },
    breakpoints: {
      // when window width is >= 320px
      0: {
        slidesPerView: 1,
        // spaceBetween: 20
      },
      340: {
        slidesPerView: 2,
        // spaceBetween: 20
      },
      // when window width is >= 320px
      576: {
        slidesPerView: 3,
        // spaceBetween: 20
      },
      // when window width is >= 320px
      750: {
        slidesPerView: 4,
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
  constructor(private productsService:ProductsService) { }

  getProducts(){

    this.productsService.getProductByFormData({
      categories:[this.subCategoryId],
      is_online:true
    }).subscribe((res:any)=>{
      // console.log(res);
      this.data = res.Response
      // this.myLength = res.Response.products.total
    },(error:any)=>{
      console.log(error);
    })
  }
  ngOnInit(): void {
    this.getProducts()
    // console.log(this.categoryId,this.subCategoryId);

  }

}
