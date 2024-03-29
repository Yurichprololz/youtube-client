import { Injectable } from '@angular/core';
import { CanActivate, Router,  UrlTree } from '@angular/router';
import { LoginService } from '@src/app/auth/services/login.service';

@Injectable({
  providedIn: 'root',
})

export class LoginGuardGuard implements CanActivate {
  constructor(private router :Router, private loginService :LoginService){}

  canActivate(): boolean | UrlTree {
    if (this.loginService.isAdmin()) return this.router.createUrlTree(['/admin']);
    return this.loginService.isLogin || this.router.createUrlTree(['/login']);
  }

}
