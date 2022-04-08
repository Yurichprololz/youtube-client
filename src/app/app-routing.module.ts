import { NgModule } from '@angular/core';
import { /* Router, */ RouterModule, Routes } from '@angular/router';
// import { LoginGuardGuard } from './core/guards/login-guard.guard';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
// import { MainPageComponent } from './youtube/pages/main-page/main-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/main',  pathMatch:'full' },
  { path: 'main', loadChildren: () => import('./youtube/youtube-routing.module')
    .then((m) => m.YoutubeRoutingModule) },
  { path: 'login', loadChildren: () => import('./auth/auth-routing.module')
    .then((m) => m.AuthRoutingModule) },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
