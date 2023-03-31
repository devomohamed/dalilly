import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { StoreProductLayoutComponent } from './store-product-layout.component';
import { StoreProductActiveAdsComponent } from './components/store-product-active-ads/store-product-active-ads.component';
import { StoreProductPassiveAdsComponent } from './components/store-product-passive-ads/store-product-passive-ads.component';
import { StoreProductExpiredAdsComponent } from './components/store-product-expired-ads/store-product-expired-ads.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    StoreProductLayoutComponent,
    StoreProductActiveAdsComponent,
    StoreProductPassiveAdsComponent,
    StoreProductExpiredAdsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule
  ]
})
export class ProductsModule { }
