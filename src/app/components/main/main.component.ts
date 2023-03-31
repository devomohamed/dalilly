import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/service/home.service';
import SwiperCore, { SwiperOptions } from 'swiper';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  srcRef:string[] = ["../../../assets/images/carIcon.jpg","../../../assets/images/carIcon.jpg","../../../assets/images/carIcon.jpg","../../../assets/images/carIcon.jpg","../../../assets/images/carIcon.jpg","../../../assets/images/carIcon.jpg","../../../assets/images/carIcon.jpg","../../../assets/images/carIcon.jpg","../../../assets/images/carIcon.jpg","../../../assets/images/carIcon.jpg","../../../assets/images/carIcon.jpg","../../../assets/images/carIcon.jpg","../../../assets/images/carIcon.jpg","../../../assets/images/carIcon.jpg","../../../assets/images/carIcon.jpg","../../../assets/images/carIcon.jpg","../../../assets/images/carIcon.jpg","../../../assets/images/carIcon.jpg","../../../assets/images/carIcon.jpg","../../../assets/images/carIcon.jpg","../../../assets/images/carIcon.jpg","../../../assets/images/carIcon.jpg","../../../assets/images/carIcon.jpg","../../../assets/images/carIcon.jpg","../../../assets/images/carIcon.jpg","../../../assets/images/carIcon.jpg","../../../assets/images/carIcon.jpg","../../../assets/images/carIcon.jpg","../../../assets/images/carIcon.jpg","../../../assets/images/carIcon.jpg","../../../assets/images/carIcon.jpg",]
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  domain:string = "https://dalilisouq.com/"
  data:any


  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },

  };


  constructor(private homeService:HomeService) { }
  sliderData:any
  countryID = Number(JSON.parse(localStorage.getItem("country_id")||'1'))

  getSliderData(){
    this.homeService.getSliderData().subscribe((res:any)=>{
      if(res.Response.length){
        this.sliderData = res.Response
      }else{
        this.sliderData = this.images
      }
      // console.log(res);
    })
  }

  getStoresAndByOnline(){
    this.homeService.getStoresAndByOnline().subscribe((res:any)=>{
      // console.log(res.Response);

      this.data = res.Response
    },(error:any)=>{
      console.log(error);

    })
  }

  ngOnInit(): void {
    this.getSliderData()
    this.getStoresAndByOnline()
  }

}
