import { EditpassiveComponent } from './modules/me/my-advertising/advertising-components/editpassive/editpassive.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterLayoutModule } from './layout/master-layout.module';
import { MasterLayoutComponent } from './layout/master-layout/master-layout.component';
import { SharedModule } from './shared/shared.module';
import { NgbModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { AllAdsComponent } from './modules/pages/all-ads/all-ads.component';
import { MeModule } from './modules/me/me.module';
import { ProfileModule } from './modules/me/profile/profile.module';
import { HomeComponent } from './modules/pages/home/home.component';
import { CategoriesComponent } from './modules/pages/categories/categories.component';
import { BuyOnlineComponent } from './modules/pages/buy-online/buy-online.component';
import { StoresComponent } from './modules/pages/stores/stores.component';
import { OffersComponent } from './modules/pages/offers/offers.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RegisterFormComponent } from './register-form/register-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AllcatComponent } from './modules/me/profile/profile-components/account/allcat/allcat.component';
import { PackagesOfCatComponent } from './modules/me/profile/profile-components/account/packages-of-cat/packages-of-cat.component';
import { ViewprofileComponent } from './modules/me/profile/profile-components/my-profile/viewprofile/viewprofile.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { SelectparentcategoryComponent } from './addproduct/selectparentcategory/selectparentcategory.component';
import { ColorsSizesComponent } from './addproduct/colors-sizes/colors-sizes.component';
// import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
// import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { Loader } from "@googlemaps/js-api-loader";
import { AddstoreComponent } from './modules/me/profile/profile-components/stores/addstore/addstore.component';
import { CitiesComponent } from './cities/cities.component';
import { RegionsComponent } from './cities/regions/regions.component';
import { AddofferComponent } from './modules/me/profile/profile-components/offers/addoffer/addoffer.component';
import { AddpackagesComponent } from './modules/me/profile/profile-components/offers/addpackages/addpackages.component';
import { ProperitiesComponent } from './modules/me/profile/profile-components/edit-products/properities/properities.component';
import { DoubleViewComponent } from './modules/store/sotre-details/components/store-profile/double-view/double-view.component';
import { ViewcodeComponent } from './viewcode/viewcode.component';
import { SalesdetailesComponent } from './modules/me/profile/profile-components/sales/salesdetailes/salesdetailes.component';
import { StoreorderdetailesComponent } from './modules/store/sotre-details/components/store-paid-sales/storeorderdetailes/storeorderdetailes.component';
import { SwiperModule } from 'swiper/angular';
import { SliderCategoriesComponent } from './components/slider-categories/slider-categories.component';
import { MainComponent } from './components/main/main.component';
import { HomeProductsComponent } from './components/home-products/home-products.component';
import { SalesProductsComponent } from './components/sales-products/sales-products.component';
import { HomeStoresComponent } from './components/home-stores/home-stores.component';
import { HomeMarktingProductsComponent } from './components/home-markting-products/home-markting-products.component';
import { MessagesComponent } from './modules/pages/messages/messages.component';
import { ProductDetailsComponent } from './modules/pages/product-details/product-details.component';
import { OfferDetailsComponent } from './modules/pages/offer-details/offer-details.component';
import { FollowingProductsComponent } from './modules/pages/following-products/following-products.component';
import { SellerComponent } from './modules/pages/seller/seller.component';
import { StoreSellerComponent } from './modules/pages/store-seller/store-seller.component';
import { ProductComponent } from './components/product/product.component';
import { FilterProductsComponent } from './components/filter-products/filter-products.component';
import { StoreComponent } from './components/store/store.component';
import { CategorryComponent } from './components/categorry/categorry.component';
import { BannerComponent } from './components/banner/banner.component';
import { Store2Component } from './components/store2/store2.component';
import { SubCategorriesComponent } from './components/sub-categorries/sub-categorries.component';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

// Import from library
import {
  NgxAwesomePopupModule,
  DialogConfigModule,
  ConfirmBoxConfigModule,
  ToastNotificationConfigModule
} from '@costlydeveloper/ngx-awesome-popup';
import { QrCodeComponent } from './components/qr-code/qr-code.component';
import { StoreInfoComponent } from './components/store-info/store-info.component';
import { OfferComponent } from './components/offer/offer.component';
import { CategoryStoresComponent } from './components/category-stores/category-stores.component';
import { MyStoresComponent } from './components/my-stores/my-stores.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { SubcategoriesListComponent } from './components/subcategories-list/subcategories-list.component';
import { SubcategoriesSubComponent } from './components/subcategories-sub/subcategories-sub.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { GoogleMapsModule } from '@angular/google-maps';
import { ReportPopupComponent } from './components/report-popup/report-popup.component';
import { AboutusPopupComponent } from './components/aboutus-popup/aboutus-popup.component';
import { GoToLoginComponent } from './components/go-to-login/go-to-login.component'
import { QrCodeModule } from 'ng-qrcode';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { Offer2Component } from './components/offer2/offer2.component';
import { NgxUiLoaderModule } from "ngx-ui-loader";
import { ChatUserComponent } from './components/chat-user/chat-user.component';
import { ChatDefaultComponent } from './components/chat-default/chat-default.component';
import { CheckoutwithoutaddressComponent } from './modules/pages/checkoutwithoutaddress/checkoutwithoutaddress.component';
import { CartcheckoutComponent } from './modules/pages/cartcheckout/cartcheckout.component';
import { StartChatComponent } from './components/start-chat/start-chat.component';
import { AngularFireModule} from '@angular/fire/compat'
// import { AngularFireDatabaseModule } from '@angular/fire/compat/database'
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { environment } from '../environments/environment.prod';
import { EditAdsComponent } from './modules/me/my-advertising/advertising-components/edit-ads/edit-ads.component';
import { EditexpireComponent } from './modules/me/my-advertising/editexpire/editexpire.component';
import { ReportproductComponent } from './modules/me/profile/profile-components/reportproduct/reportproduct.component';
import { EditColorsSizesComponent } from './modules/me/profile/profile-components/edit-products/edit-colors-sizes/edit-colors-sizes.component';
import { OrdersellerdetailesComponent } from './ordersellerdetailes/ordersellerdetailes.component';

@NgModule({
  declarations: [
    AppComponent,
    AllAdsComponent,
    HomeComponent,
    CategoriesComponent,
    BuyOnlineComponent,
    StoresComponent,
    OffersComponent,
    LoginFormComponent,
    RegisterFormComponent,
    AllcatComponent,
    PackagesOfCatComponent,
    ViewprofileComponent,
    AddproductComponent,
    SelectparentcategoryComponent,
    ColorsSizesComponent,
    CitiesComponent,
    RegionsComponent,
    AddofferComponent,
    AddpackagesComponent,
    ProperitiesComponent,
    DoubleViewComponent,
    ViewcodeComponent,
    SalesdetailesComponent,
    StoreorderdetailesComponent,
    SliderCategoriesComponent,
    MainComponent,
    HomeProductsComponent,
    SalesProductsComponent,
    HomeStoresComponent,
    HomeMarktingProductsComponent,
    MessagesComponent,
    ProductDetailsComponent,
    OfferDetailsComponent,
    FollowingProductsComponent,
    SellerComponent,
    StoreSellerComponent,
    ProductComponent,
    FilterProductsComponent,
    StoreComponent,
    CategorryComponent,
    BannerComponent,
    Store2Component,
    SubCategorriesComponent,
    QrCodeComponent,
    StoreInfoComponent,
    OfferComponent,
    CategoryStoresComponent,
    MyStoresComponent,
    CategoriesListComponent,
    SubcategoriesListComponent,
    SubcategoriesSubComponent,
    ReportPopupComponent,
    AboutusPopupComponent,
    GoToLoginComponent,
    Offer2Component,
    ChatUserComponent,
    ChatDefaultComponent,
    CheckoutwithoutaddressComponent,
    CartcheckoutComponent,
    StartChatComponent,
    AddstoreComponent,
    EditAdsComponent,
    EditpassiveComponent,
    EditexpireComponent,
    ReportproductComponent,
    EditColorsSizesComponent,
    OrdersellerdetailesComponent





    // OrderComponent,


  ],
  imports: [
    CommonModule,
    BrowserModule,
    MasterLayoutModule,
    AppRoutingModule,
    SharedModule,
    NgbModule,
    NgbTooltipModule,
    MeModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    Ng2SearchPipeModule,
    SwiperModule,
    ReactiveFormsModule,
    // FontAwesomeModule
    // ShareButtonsModule.withConfig({debug:true}
    //   ),
    //  ShareIconsModule,
    NgxAwesomePopupModule.forRoot(), // Essential, mandatory main module.
    DialogConfigModule.forRoot(), // Needed for instantiating dynamic components.
    ConfirmBoxConfigModule.forRoot(), // Needed for instantiating confirm boxes.
    ToastNotificationConfigModule.forRoot(), // Needed for instantiating toast notifications.
    NgxSliderModule,
    InfiniteScrollModule,
    GoogleMapsModule,
    QrCodeModule,
    NgbPaginationModule,
    NgbAlertModule,
    NgxImageZoomModule,
    NgxUiLoaderModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
