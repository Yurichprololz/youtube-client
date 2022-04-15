import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './compnents/auth/auth.component';
import { HeaderComponent } from './compnents/header/header.component';
import { SearchComponent } from './compnents/search/search.component';
import { SettingButtonComponent } from './compnents/setting-button/setting-button.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';



@NgModule({
  declarations: [
    HeaderComponent,
    AuthComponent,
    SearchComponent,
    SettingButtonComponent,
    AdminPageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
  ],
  exports: [
    HeaderComponent,
  ],
})

export class CoreModule { }
