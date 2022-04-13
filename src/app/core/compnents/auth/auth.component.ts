import { Component, OnInit } from '@angular/core';
import { LoginService } from '@src/app/auth/services/login.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})

export class AuthComponent implements OnInit {
  name:string = 'Your name';

  isLogin!:boolean;

  constructor(private loginService: LoginService){}

  ngOnInit(){
    this.loginService.pushIsLogin
      .subscribe({ next:(value: boolean) => {
        this.isLogin = value;
        this.name = localStorage.getItem('name') || 'Your name';
      } });
  }

  logOut(){
    this.loginService.logOut();
  }

  logIn(){
    this.loginService.redirectToLoginPage();
  }


}
