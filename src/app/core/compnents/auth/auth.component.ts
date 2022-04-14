import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from '@src/app/auth/services/login.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})

export class AuthComponent implements OnInit, OnDestroy {
  name:string = 'Your name';

  isLogin!:boolean;

  constructor(private loginService: LoginService){}

  ngOnInit(){
    this.loginService.subject
      .subscribe({
        next:(value: boolean) => {
          this.isLogin = value;
          this.name = localStorage.getItem('name') || 'Your name';
        },
        error:(error: Error) => console.log(error) });
  }

  ngOnDestroy(): void {
    this.loginService.subject.unsubscribe();
  }

  logOut(){
    this.loginService.logOut();
  }

  logIn(){
    this.loginService.redirectToLoginPage();
  }


}
