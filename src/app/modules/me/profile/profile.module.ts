import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { AccountComponent } from './profile-components/account/account.component';
import { AddressesComponent } from './profile-components/addresses/addresses.component';
import { FavouritesComponent } from './profile-components/favourites/favourites.component';
import { FollowersComponent } from './profile-components/followers/followers.component';
import { FollowingComponent } from './profile-components/following/following.component';
import { MyProfileComponent } from './profile-components/my-profile/my-profile.component';
import { OffersComponent } from './profile-components/offers/offers.component';
import { OrdersComponent } from './profile-components/orders/orders.component';
import { PaidSalesComponent } from './profile-components/paid-sales/paid-sales.component';
import { ProfileCoverComponent } from './profile-components/profile-cover/profile-cover.component';
import { RecentlyViewComponent } from './profile-components/recently-view/recently-view.component';
import { RejectedSalesComponent } from './profile-components/rejected-sales/rejected-sales.component';
import { SalesComponent } from './profile-components/sales/sales.component';
import { StoresComponent } from './profile-components/stores/stores.component';
import { SharedModule } from '../../../shared/shared.module';
import { ProfileLayoutComponent } from './profile-layout.component';
import { EditProductsComponent } from './profile-components/edit-products/edit-products.component';
import { EditStoreComponent } from './profile-components/edit-store/edit-store.component';
import { EditOfferComponent } from './profile-components/edit-offer/edit-offer.component';
import { CategoriesComponent } from './profile-components/account/categories/categories.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderComponent } from '../../../order/order.component';
import { AddaddressComponent } from './profile-components/addaddress/addaddress.component';
 

@NgModule({
  declarations: [
   
    ProfileLayoutComponent,
    MyProfileComponent,
    FollowersComponent,
    FollowingComponent,
    FavouritesComponent,
    AddressesComponent,
  
    AccountComponent,
    StoresComponent,
    OffersComponent,
    OrdersComponent,
    SalesComponent,
    PaidSalesComponent,
    RejectedSalesComponent,
    RecentlyViewComponent,
    ProfileCoverComponent,
    EditProductsComponent,
    EditStoreComponent,
    EditOfferComponent,
    CategoriesComponent,
    OrderComponent,
    
   
    
    
  
    // StoreProfileComponent,
    // StoreLayoutComponent,
   
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule,
    Ng2SearchPipeModule,
 
    

    
  ]
})
export class ProfileModule { }
