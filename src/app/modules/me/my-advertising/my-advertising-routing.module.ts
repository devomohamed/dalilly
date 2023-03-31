import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorsSizesComponent } from 'src/app/addproduct/colors-sizes/colors-sizes.component';
import { SelectparentcategoryComponent } from 'src/app/addproduct/selectparentcategory/selectparentcategory.component';
import { CitiesComponent } from 'src/app/cities/cities.component';
import { RegionsComponent } from 'src/app/cities/regions/regions.component';
import { EditColorsSizesComponent } from '../profile/profile-components/edit-products/edit-colors-sizes/edit-colors-sizes.component';
import { ProperitiesComponent } from '../profile/profile-components/edit-products/properities/properities.component';
import { ActiveAdsComponent } from './advertising-components/active-ads/active-ads.component';
import { EditAdsComponent } from './advertising-components/edit-ads/edit-ads.component';
import { EditpassiveComponent } from './advertising-components/editpassive/editpassive.component';
import { ExpiredAdsComponent } from './advertising-components/expired-ads/expired-ads.component';
import { PassiveAdsComponent } from './advertising-components/passive-ads/passive-ads.component';
import { EditexpireComponent } from './editexpire/editexpire.component';
import { MyAdvertisingLayoutComponent } from './my-advertising-layout.component';

const routes: Routes = [
  {
    path: "",
    component: MyAdvertisingLayoutComponent,
    children: [
      {
        path: "active-ads",
        component: ActiveAdsComponent,
        children:[
         
        ]
      },
      {
        path:"passive-ads",
        component: PassiveAdsComponent
      },
      {
        path: "expired-ads",
        component: ExpiredAdsComponent
      },
      {
        path:'edit-product/:id',
        component:EditAdsComponent
      },
      {
        path:'edit-expire/:id',
        component:EditexpireComponent
      }, {
        path:'edit-passive/:id',
        component:EditpassiveComponent
      },
      
        {
          path:'select-category/:data',
          component:SelectparentcategoryComponent
      },
      {path:'edit-properities',component:ProperitiesComponent},
      {path:'edit-color_size',component:EditColorsSizesComponent},
      {path:'properity-color/:data',component:ColorsSizesComponent},
      {
        path:'cities/:data',
        component:CitiesComponent
      },
      {path:'regions/:data',
          component:RegionsComponent       
    }
     
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyAdvertisingRoutingModule { }
