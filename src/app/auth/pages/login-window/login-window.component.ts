import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login-window',
  templateUrl: './login-window.component.html',
  styleUrls: ['./login-window.component.scss'],
})

export class LoginWindowComponent {
  constructor(private loginService :LoginService){}

  name: string = '';

  sighIn(){
    this.loginService.signIn(this.name);
  }

}
