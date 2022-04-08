import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './compnents/auth/auth.component';
import { HeaderComponent } from './compnents/header/header.component';
import { SearchComponent } from './compnents/search/search.component';
import { SettingButtonComponent } from './compnents/setting-button/setting-button.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HeaderComponent,
    AuthComponent,
    SearchComponent,
    SettingButtonComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    HeaderComponent,
  ],
})
export class CoreModule { }
