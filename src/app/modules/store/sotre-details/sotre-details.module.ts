import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SotreDetailsRoutingModule } from './sotre-details-routing.module';
import { StoreDetailsLayoutComponent } from './store-details-layout.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreProfileComponent } from './components/store-profile/store-profile.component';
import { StorePaidSalesComponent } from './components/store-paid-sales/store-paid-sales.component';
import { RejectedSalesComponent } from './components/rejected-sales/rejected-sales.component';
import { TotalSalesComponent } from './components/total-sales/total-sales.component';
import { StoreMySalesComponent } from './components/store-my-sales/store-my-sales.component';
import { StoreFollowersComponent } from './components/store-followers/store-followers.component';
import { StoreTotalViewsComponent } from './components/store-total-views/store-total-views.component';
import { BestSellerComponent } from './components/best-seller/best-seller.component';


@NgModule({
  declarations: [
    StoreDetailsLayoutComponent,
    StoreProfileComponent,
    StorePaidSalesComponent,
    RejectedSalesComponent,
    TotalSalesComponent,
    BestSellerComponent,
    StoreMySalesComponent,
    StoreFollowersComponent,
    StoreTotalViewsComponent
  ],
  imports: [
    CommonModule,
    SotreDetailsRoutingModule,
    SharedModule
  ]
})
export class SotreDetailsModule { }
