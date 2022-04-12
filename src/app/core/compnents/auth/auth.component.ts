import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})

export class AuthComponent {
  name:string;

  constructor() {
    this.name = localStorage.getItem('name') || 'Your name';
  }
}
