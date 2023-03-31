import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeLayoutComponent } from './me-layout.component';
//import { StoreLayoutComponent } from './store/store-layout.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { SalesdetailesComponent } from './profile/profile-components/sales/salesdetailes/salesdetailes.component';

const routes: Routes = [
  {
    path: "",
    component: MeLayoutComponent,
    children: [
      {
        path: "profile",
        loadChildren: () => import("./profile/profile.module").then(m => m.ProfileModule),
        canActivate: [AuthGuard,]
      },
      {
        path: "my-advertising",
        loadChildren: () => import("./my-advertising/my-advertising.module").then(m => m.MyAdvertisingModule)
      },
      {
        path:"settings",
        loadChildren: () => import("./settings/settings.module").then(m => m.SettingsModule)
      },
      {
        path: "my-wallet",
        loadChildren: () => import("./my-wallet/my-wallet.module").then(m => m.MyWalletModule)
      },
     
     
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeRoutingModule { }
