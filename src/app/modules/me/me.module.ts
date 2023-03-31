import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeRoutingModule } from './me-routing.module';
import { SharedModule } from '../../shared/shared.module';
// import { AccountComponent } from './profile-pages/account/account.component';
// import { AddressesComponent } from './profile-pages/addresses/addresses.component';
// import { FavouritesComponent } from './profile-pages/favourites/favourites.component';
// import { FollowersComponent } from './profile-pages/followers/followers.component';
// import { FollowingComponent } from './profile-pages/following/following.component';
// import { MyProfileComponent } from './profile-pages/my-profile/my-profile.component';
// import { OffersComponent } from './profile-pages/offers/offers.component';
// import { OrdersComponent } from './profile-pages/orders/orders.component';
// import { PaidSalesComponent } from './profile-pages/paid-sales/paid-sales.component';
// import { ProfileCoverComponent } from './profile-pages/profile-cover/profile-cover.component';
// import { RecentlyViewComponent } from './profile-pages/recently-view/recently-view.component';
// import { RejectedSalesComponent } from './profile-pages/rejected-sales/rejected-sales.component';
// import { SalesComponent } from './profile-pages/sales/sales.component';
// import { StoresComponent } from './profile-pages/stores/stores.component';
import { MeLayoutComponent } from './me-layout.component';
import { ProfileModule } from './profile/profile.module';

import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
      MeLayoutComponent,

  ],
  imports: [
    CommonModule,
    MeRoutingModule,
    SharedModule,
    ProfileModule,
    Ng2SearchPipeModule,

  ]
})
export class MeModule { }
