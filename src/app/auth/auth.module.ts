import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginWindowComponent } from './pages/login-window/login-window.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [LoginWindowComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports : [LoginWindowComponent],
})

export class AuthModule { }
