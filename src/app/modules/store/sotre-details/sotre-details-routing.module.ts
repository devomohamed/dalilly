import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProductsComponent } from '../../me/profile/profile-components/edit-products/edit-products.component';
import { ViewprofileComponent } from '../../me/profile/profile-components/my-profile/viewprofile/viewprofile.component';
import { StoreProductLayoutComponent } from '../products/store-product-layout.component';
import { BestSellerComponent } from './components/best-seller/best-seller.component';
import { RejectedSalesComponent } from './components/rejected-sales/rejected-sales.component';
import { StoreFollowersComponent } from './components/store-followers/store-followers.component';
import { StoreMySalesComponent } from './components/store-my-sales/store-my-sales.component';
import { StorePaidSalesComponent } from './components/store-paid-sales/store-paid-sales.component';
import { StoreorderdetailesComponent } from './components/store-paid-sales/storeorderdetailes/storeorderdetailes.component';
import { DoubleViewComponent } from './components/store-profile/double-view/double-view.component';
import { StoreProfileComponent } from './components/store-profile/store-profile.component';
import { StoreTotalViewsComponent } from './components/store-total-views/store-total-views.component';
import { TotalSalesComponent } from './components/total-sales/total-sales.component';
import { StoreDetailsLayoutComponent } from './store-details-layout.component';

const routes: Routes = [
  {
    path: "",
    component: StoreDetailsLayoutComponent,
    children: [
      {
        path: "store-profile/:id",
        component: StoreProfileComponent,
      
         
        
      },
       {
            path:'doupleview',
            component:DoubleViewComponent
      },
      {
        path: "paid-sales/:id",
        component: StorePaidSalesComponent
      },
      {path:'order-detailes/:order-id/:store-id',
      component:StoreorderdetailesComponent
    },
      {
        path: "rejected-sales/:id",
        component: RejectedSalesComponent
      },
      {
        path: "total-sales/:id",
        component: TotalSalesComponent
      },
      {
        path: "best-seller/:id",
        component: BestSellerComponent
      },
      {
        path: "my-sales/:id",
        component: StoreMySalesComponent
      },
      {
        path: "followers/:id",
        component: StoreFollowersComponent
      },
      {
        path:"total-views",
        component: StoreTotalViewsComponent
      },
      {
        path:"myproducts/:id",
        // component: StoreProductLayoutComponent
        loadChildren: () => import("../products/products.module").then(m => m.ProductsModule)
   
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SotreDetailsRoutingModule { }
