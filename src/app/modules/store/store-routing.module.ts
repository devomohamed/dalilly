import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreLayoutComponent } from './store-layout.component';
import { HeaderComponent } from 'src/app/layout/header/header.component';
import { StoreProfileComponent } from './sotre-details/components/store-profile/store-profile.component';

const routes: Routes = [
  {
    path: "store:/id",
    component: StoreLayoutComponent,
    children: [
      {
        path: "store-profile",
        loadChildren: () => import("./sotre-details/sotre-details.module").then(m => m.SotreDetailsModule)
      },
      {
        path: "my-products",
        loadChildren: () => import("./products/products.module").then(m => m.ProductsModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
