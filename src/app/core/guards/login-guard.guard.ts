import { Injectable } from '@angular/core';
import { /* ActivatedRouteSnapshot, RouterStateSnapshot, */ CanActivate, Router,  UrlTree } from '@angular/router';
import { LoginService } from '@src/app/auth/services/login.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginGuardGuard implements CanActivate {
  constructor(private router :Router, private loginService :LoginService){}

  canActivate(/* route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot */): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.loginService.isLogin() || this.router.createUrlTree(['/login']);
  }

}
