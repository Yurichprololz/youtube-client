import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormControlStatus, FormGroup, Validators } from '@angular/forms';
import { EmailPlaceholders, PasswordPlaceholders } from '@src/app/shared/enums/placeholders.enums';
import { myValidatorForPassword } from '@src/app/shared/helper';
import { Subscription } from 'rxjs';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login-window',
  templateUrl: './login-window.component.html',
  styleUrls: ['./login-window.component.scss'],
})

export class LoginWindowComponent implements OnInit, OnDestroy{
  emailPlaceholder = EmailPlaceholders.default;

  passwordPlaceholder: PasswordPlaceholders = PasswordPlaceholders.default; // PasswordPlaceholders.default;

  emailSubscriber: Subscription | null = null;

  passwordSubscriber: Subscription | null = null;

  loginData: FormGroup;

  constructor(private loginService :LoginService){
    this.loginData = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, myValidatorForPassword]),
    });

  }


  ngOnInit(): void {
    this.emailSubscriber = this.loginData.controls['email'].statusChanges
      .subscribe((control: FormControlStatus) => {
        this.emailPlaceholder = control === 'VALID' ? EmailPlaceholders.valid : EmailPlaceholders.invalid;
      });

    this.passwordSubscriber = this.loginData.controls['password'].statusChanges
      .subscribe(() =>  {
        this.passwordPlaceholder = this.loginData.controls['password'].getError('message') || PasswordPlaceholders.valid;
      });
  }

  ngOnDestroy(): void {
    this.emailSubscriber?.unsubscribe();
    this.passwordSubscriber?.unsubscribe();
  }


  onSubmit(){
    this.loginService.signIn(this.loginData.value.email);
  }

}
