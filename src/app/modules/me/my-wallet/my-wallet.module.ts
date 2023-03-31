import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyWalletRoutingModule } from './my-wallet-routing.module';
import { MyWalletLayoutComponent } from './my-wallet-layout.component';


@NgModule({
  declarations: [
    MyWalletLayoutComponent
  ],
  imports: [
    CommonModule,
    MyWalletRoutingModule
  ]
})
export class MyWalletModule { }
