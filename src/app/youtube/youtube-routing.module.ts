import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuardGuard } from '../core/guards/login-guard.guard';
import { DetailedInfoPageComponent } from './pages/detailed-info-page/detailed-info-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

const routes: Routes = [
  { path: 'information/:id', component: DetailedInfoPageComponent },
  { path: 'main', component: MainPageComponent, canActivate: [LoginGuardGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class YoutubeRoutingModule { }
