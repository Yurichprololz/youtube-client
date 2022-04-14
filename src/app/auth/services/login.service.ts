import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class LoginService {
  isLogin:boolean;

  subject: BehaviorSubject<boolean>;

  constructor(private router :Router){
    this.isLogin = Boolean(localStorage.getItem('falseToken'));
    this.subject = new BehaviorSubject<boolean>(this.isLogin);
  }

  signIn(name :string){
    localStorage.setItem('name', name);
    localStorage.setItem('falseToken', '1a1wqea2');
    this.toggleIsLogin();
    this.redirectToMain();
  }

  toggleIsLogin(){
    this.isLogin = !this.isLogin;
    this.subject.next(this.isLogin);
  }

  redirectToMain(){
    this.router.navigateByUrl('main');
  }

  redirectToLoginPage(){
    this.router.navigateByUrl('login');
  }

  logOut(){
    localStorage.removeItem('name');
    localStorage.removeItem('falseToken');
    this.toggleIsLogin();
    this.redirectToLoginPage();
  }
}
