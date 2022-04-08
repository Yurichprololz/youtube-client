import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigateService {

  constructor(private router :Router) { }

  getDetailedInfo(id :string){
    this.router.navigate(['information', id]);
  }

  goHome() {
    this.router.navigate(['']);
  }
}
