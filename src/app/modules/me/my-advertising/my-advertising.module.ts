import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyAdvertisingRoutingModule } from './my-advertising-routing.module';
import { MyAdvertisingLayoutComponent } from './my-advertising-layout.component';
import { ActiveAdsComponent } from './advertising-components/active-ads/active-ads.component';
import { PassiveAdsComponent } from './advertising-components/passive-ads/passive-ads.component';
import { ExpiredAdsComponent } from './advertising-components/expired-ads/expired-ads.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { EditAdsComponent } from './advertising-components/edit-ads/edit-ads.component';


@NgModule({
  declarations: [
    MyAdvertisingLayoutComponent,
    ActiveAdsComponent,
    PassiveAdsComponent,
    ExpiredAdsComponent
  ],
  imports: [
    CommonModule,
    MyAdvertisingRoutingModule,
    FormsModule,
    SharedModule,
    Ng2SearchPipeModule,
  ]
})
export class MyAdvertisingModule { }
