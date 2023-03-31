import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsLayoutComponent } from './settings-layout.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ProfileDataComponent } from './components/profile-data/profile-data.component';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    SettingsLayoutComponent,
    ChangePasswordComponent,
    ProfileDataComponent,
    ProfileEditComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    SharedModule
  ]
})
export class SettingsModule { }
