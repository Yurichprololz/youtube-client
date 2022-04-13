import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class LoginService {
  isLogin:boolean;

  pushIsLogin: EventEmitter<boolean> = new EventEmitter;

  constructor(private router :Router){
    this.isLogin = Boolean(localStorage.getItem('falseToken'));
  }

  signIn(name :string){
    localStorage.setItem('name', name);
    localStorage.setItem('falseToken', '1a1wqea2');
    this.toggleIsLogin();
    this.redirectToMain();
  }

  toggleIsLogin(){
    this.isLogin = !this.isLogin;
    this.pushIsLogin.emit(this.isLogin);
  }

  redirectToMain(){
    this.router.navigateByUrl('main');
  }

  redirectToLoginPage(){
    this.router.navigateByUrl('login');
  }

  getIsLogin(){
    return new Observable<boolean>((subscriber) => {
      setInterval(() => subscriber.next(this.isLogin), 1000);
    });
  }

  logOut(){
    localStorage.removeItem('name');
    localStorage.removeItem('falseToken');
    this.toggleIsLogin();
    this.redirectToLoginPage();
  }
}
