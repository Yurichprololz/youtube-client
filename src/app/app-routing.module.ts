import { NgModule } from '@angular/core';
import { /* Router, */ RouterModule, Routes } from '@angular/router';
import { LoginWindowComponent } from './shared/components/login-window/login-window.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { MainPageComponent } from './youtube/pages/main-page/main-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/main',  pathMatch:'full' },
  { path:'main', component: MainPageComponent },
  { path: 'login', component: LoginWindowComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
