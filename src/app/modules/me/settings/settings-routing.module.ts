import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ProfileDataComponent } from './components/profile-data/profile-data.component';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';
import { SettingsLayoutComponent } from './settings-layout.component';

const routes: Routes = [
  {
    path: "",
    component: SettingsLayoutComponent,

    children: [
      {
        path: "",
        component: ProfileDataComponent
      },
      {
        path: "edit",
        component: ProfileEditComponent
      },
      {
        path: "change-password",
        component: ChangePasswordComponent
      }
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
