import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})

export class LoginService {
  constructor(private router :Router){}

  signIn(name :string){
    localStorage.setItem('name', name);
    localStorage.setItem('falseToken', '1a1wqea2');
    if (this.isLogin()) {
      this.redirectToMain();
    }
  }

  redirectToMain(){
    this.router.navigateByUrl('main');
  }

  isLogin() :boolean{
    return Boolean(localStorage.getItem('falseToken'));
  }
}
