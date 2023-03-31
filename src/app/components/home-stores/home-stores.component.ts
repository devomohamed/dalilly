import { OwlOptions } from 'ngx-owl-carousel-o';
import { Component, OnInit } from '@angular/core';
import SwiperCore, { SwiperOptions } from 'swiper';
import { Navigation, Pagination, Scrollbar, A11y , Autoplay, Grid } from 'swiper';
import { SwiperComponent } from "swiper/angular";
import { Store } from '../../models/store.model';
import { StoreService } from '../../service/store.service';
import { CategoryService } from '../../service/category.service';
SwiperCore.use([Grid, Pagination]);

@Component({
  selector: 'app-home-stores',
  templateUrl: './home-stores.component.html',
  styleUrls: ['./home-stores.component.scss']
})
export class HomeStoresComponent implements OnInit {


  links:any[] = []
  idActive:number = 0
  catId:number = 2
  stores!:Store[]
  config: SwiperOptions = {
    // slidesPerView: 5,
    spaceBetween: 30,
    navigation: true,
    // loop:true,
    autoplay:{
      delay:4000
    },
    grid:{
      rows:3,
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

  constructor(private storeService:StoreService,private category:CategoryService) { }

  getCategories(){
    this.category.getCategoriesContainStores().subscribe((res:any)=>{
      console.log(res);
      this.links = res.Response
      this.idActive = res.Response[0].id
    },(error)=>{})
  }

  getStores(){
    this.storeService.getStores().subscribe((res:any)=>{
      // console.log(res);
      this.stores = res.Response
    },(error)=>{})
  }

  changeLink(id:any){
    this.idActive = id
    this.catId = id
    this.getStoresByCategory()
  }

  getStoresByCategory(){
    this.storeService.getStoresByCategory(this.catId).subscribe((res:any)=>{
      this.stores = res.Response
      // console.log(res);

    },(error:any)=>{console.log(error);
    })
  }

  ngOnInit(): void {
    // this.getStores()
    this.getStoresByCategory()
    this.getCategories()
  }

}
