import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './compnents/auth/auth.component';
import { HeaderComponent } from './compnents/header/header.component';
import { SearchComponent } from './compnents/search/search.component';
import { SettingButtonComponent } from './compnents/setting-button/setting-button.component';
import { SortButtonComponent } from './compnents/sort-button/sort-button.component';
import { SharedModule } from '../shared/shared.module';
import { SortArrowsDirective } from './directives/sort-arrows.directive';



@NgModule({
  declarations: [
    HeaderComponent,
    AuthComponent,
    SearchComponent,
    SortButtonComponent,
    SettingButtonComponent,
    SortArrowsDirective,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    HeaderComponent,
    AuthComponent,
    SearchComponent,
    SortButtonComponent,
    SettingButtonComponent,
  ],
})
export class CoreModule { }
