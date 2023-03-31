import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BalancesComponent } from './balances/balances.component';
import { MyWalletLayoutComponent } from './my-wallet-layout.component';

const routes: Routes = [
  {
    path: "",
    component: MyWalletLayoutComponent,
    
  }, {
    path:'balances',
    component:BalancesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyWalletRoutingModule { }
