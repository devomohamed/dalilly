import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { StoreLayoutComponent } from './store-layout.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SotreDetailsModule } from './sotre-details/sotre-details.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    StoreLayoutComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    SharedModule,
  SotreDetailsModule,
  Ng2SearchPipeModule
  ]
})
export class StoreModule { }
