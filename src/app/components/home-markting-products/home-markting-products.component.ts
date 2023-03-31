import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import SwiperCore, { SwiperOptions } from 'swiper';
import { Navigation, Pagination, Scrollbar, A11y , Autoplay } from 'swiper';

SwiperCore.use([Autoplay])


@Component({
  selector: 'app-home-markting-products',
  templateUrl: './home-markting-products.component.html',
  styleUrls: ['./home-markting-products.component.scss']
})
export class HomeMarktingProductsComponent implements OnInit {

  @Input() data:any
  @Input() typeComponent:any = 1
  config2: SwiperOptions = {
    slidesPerView: 15,
    spaceBetween: 20,
    navigation: true,
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
        slidesPerView: 4,
        // spaceBetween: 30
      },
      // when window width is >= 640px
      1200: {
        slidesPerView: 5,
        // spaceBetween: 10
      }
    }
  };
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


  constructor(
    private router:Router
  ) { }

  redirectByCat(cat:any){
    this.router.navigate(['/all-ads'], {queryParams: {catId:cat}})
  }


  ngOnInit(): void {
    // console.log(this.data);

  }

}
