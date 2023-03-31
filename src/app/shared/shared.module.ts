import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdvertisingComponent } from './components/advertising/advertising.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { SwiperModule } from 'swiper/angular';


@NgModule({
  declarations: [
    AdvertisingComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgbNavModule,
    SwiperModule
  ],
  exports:[
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AdvertisingComponent,
    NgbNavModule,
    SwiperModule

  ]
})
export class SharedModule { }
