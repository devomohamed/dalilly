import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MasterLayoutComponent } from './master-layout/master-layout.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MasterLayoutComponent,
    SearchBarComponent,
    HeaderComponent,
    FooterComponent,
    
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class MasterLayoutModule { }
