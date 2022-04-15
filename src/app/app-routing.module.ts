import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/main',  pathMatch:'full' },
  { path: 'main', loadChildren: () => import('./youtube/youtube-routing.module')
    .then((m) => m.YoutubeRoutingModule) },
  { path: 'login', loadChildren: () => import('./auth/auth-routing.module')
    .then((m) => m.AuthRoutingModule) },
  { path: 'admin', loadChildren: () => import('./core/core-routing.module')
    .then((m) => m.CoreRoutingModule ) },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})

export class AppRoutingModule { }
