import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import SwiperCore, { SwiperOptions } from 'swiper';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { AllAdsService } from '../../service/all-ads.service';
import { Router } from '@angular/router';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-slider-categories',
  templateUrl: './slider-categories.component.html',
  styleUrls: ['./slider-categories.component.scss']
})
export class SliderCategoriesComponent implements OnInit {

  @Input() categories:any
  @Input() type:any
  @Input() catSelected:any
  @Input() subSelected:any
  @Input() subSubSelected:any
  @Output() categoryIdSelected = new EventEmitter();
  @Output() subIdSelected = new EventEmitter();
  @Output() subSubIdSelected = new EventEmitter();



  config: SwiperOptions = {
    slidesPerView: 15,
    spaceBetween: 3,
    navigation: true,
    scrollbar: { draggable: true },
    breakpoints: {
      // when window width is >= 320px
      0: {
        slidesPerView: 8,
        // spaceBetween: 20
      },
      // when window width is >= 320px
      576: {
        slidesPerView: 11,
        // spaceBetween: 20
      },
      // when window width is >= 320px
      750: {
        slidesPerView: 13,
        // spaceBetween: 20
      },
      // when window width is >= 480px
      992: {
        slidesPerView: 17,
        // spaceBetween: 30
      },
      // when window width is >= 640px
      1200: {
        slidesPerView: 25,
        // spaceBetween: 10
      }
    }
  };
  config2: SwiperOptions = {
    slidesPerView: 15,
    spaceBetween: 3,
    navigation: true,
    scrollbar: { draggable: true },
    breakpoints: {
      // when window width is >= 320px
      0: {
        slidesPerView: 6,
        // spaceBetween: 20
      },
      // when window width is >= 320px
      576: {
        slidesPerView: 9,
        // spaceBetween: 20
      },
      // when window width is >= 320px
      750: {
        slidesPerView: 10,
        // spaceBetween: 20
      },
      // when window width is >= 480px
      992: {
        slidesPerView: 14,
        // spaceBetween: 30
      },
      // when window width is >= 640px
      1200: {
        slidesPerView: 20,
        // spaceBetween: 10
      }
    }
  };

  constructor(private allAds:AllAdsService,private router:Router) { }



  changeTxt(id:number,operation:string){
    switch (operation) {
      case 'all':
        // let txtAll = this.categoriesCopy.find((txt:any)=> txt.id == id).name
        // console.log(txtAll);
        // console.log(this.categoriesCopy);
        // console.clear()

        // this.categories.
        break;
      case 'one':


      default:
        break;
    }

  }

  ShowText(src:any){
    // console.log(src);
    this.changeTxt(src,"all")

  }


  changeCatSelected(id:any){
    // this.catSelected = id
    this.categoryIdSelected.emit(id)
    // console.log(id);

  }

  changeSubSelected(id:any,hasCat:any){
    // this.subSelected = id
    this.subIdSelected.emit({id,hasCat})
    // console.log(id , hasCat);
  }
  changeSubSubSelected(id:any){
    // this.subSubSelected = id
    this.subSubIdSelected.emit(id)
    // console.log(id);
  }
  changeAndDirect(catId:any){
    // console.log(catId);
    this.router.navigate(['/all-ads'], {queryParams: {catId}})
  }



  ngOnInit(): void {
    // this.getCatAct()

  }


}
