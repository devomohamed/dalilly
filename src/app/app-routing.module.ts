import { ChatUserComponent } from './components/chat-user/chat-user.component';
import { ChatDefaultComponent } from './components/chat-default/chat-default.component';
import { ProductDetailsComponent } from './modules/pages/product-details/product-details.component';
import { MessagesComponent } from './modules/pages/messages/messages.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterLayoutComponent } from './layout/master-layout/master-layout.component';
import { AllAdsComponent } from './modules/pages/all-ads/all-ads.component';
import { HomeComponent } from './modules/pages/home/home.component';
import { CategoriesComponent } from './modules/pages/categories/categories.component';
import { BuyOnlineComponent } from './modules/pages/buy-online/buy-online.component';
import { StoresComponent } from './modules/pages/stores/stores.component';
import { OffersComponent } from './modules/pages/offers/offers.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { OfferDetailsComponent } from './modules/pages/offer-details/offer-details.component';
import { FollowingProductsComponent } from './modules/pages/following-products/following-products.component';
import { SellerComponent } from './modules/pages/seller/seller.component';
import { StoreSellerComponent } from './modules/pages/store-seller/store-seller.component';
import { CategoryStoresComponent } from './components/category-stores/category-stores.component';
import { MyStoresComponent } from './components/my-stores/my-stores.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { SubcategoriesListComponent } from './components/subcategories-list/subcategories-list.component';
import { SubcategoriesSubComponent } from './components/subcategories-sub/subcategories-sub.component';
import { AuthGuard } from './core/guards/auth.guard';
import { CheckoutwithoutaddressComponent } from './modules/pages/checkoutwithoutaddress/checkoutwithoutaddress.component';
import { CartcheckoutComponent } from './modules/pages/cartcheckout/cartcheckout.component';

const routes: Routes = [
  {
    path: "",
    component: MasterLayoutComponent,
    children: [
      {path:'', redirectTo: '/home',pathMatch:'full'},
      {
        path: "home",
        component: HomeComponent
      },
      {
        path: "categories",
        component: CategoriesComponent,
        children:[
          {path:'',component:CategoriesListComponent},
          {path:':id',component:SubcategoriesListComponent},
          {path:':id/:subId',component:SubcategoriesSubComponent}
        ]
      },
      {
        path: "messages",
        component: MessagesComponent,
        children:[
          {path:'',component:ChatDefaultComponent},
          {path:':id',component:ChatUserComponent}
        ],
        canActivate: [AuthGuard,]
      },
      {
        path: "productdetails/:id",
        component: ProductDetailsComponent
      },
      {
        path: "buy-online",
        component: BuyOnlineComponent
      },
      {
        path: "stores",
        component: StoresComponent,
        children:[
          {
            path:'',component:CategoryStoresComponent
          },
          {
            path:':id',component:MyStoresComponent
          }
        ]
      },
      {
        path: "offers",
        component: OffersComponent
      },
      {
        path: "offer/:id",
        component: OfferDetailsComponent
      },
      {
        path: "followingproducts",
        component: FollowingProductsComponent,
        canActivate: [AuthGuard,]
      },
      {
        path: "storeseller/:id",
        component: StoreSellerComponent
      },
      {
        path: "sellerprofile/:id",
        component: SellerComponent
      },
      {
        path: "me",
        loadChildren: () => import('./modules/me/me.module').then(m => m.MeModule)
      },
      {
        path: "store/:id",
        loadChildren: () => import('./modules/store/store.module').then(m => m.StoreModule)
      }
      ,
      {
        path: "all-ads",
        component: AllAdsComponent
      },
      {
        path:'checkout',
        component:CartcheckoutComponent,
        canActivate: [AuthGuard,]
      },
      {
        path:'address',
        component:CheckoutwithoutaddressComponent,
        canActivate: [AuthGuard,]
      }
    ]
  },
  // { path: '',  },
  {path:'login',component:LoginFormComponent},
  {path:'regist',component:RegisterFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
