import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToggleButtonService {

  isShownFilterBar: boolean = false;

  toggleEmit = new EventEmitter<boolean>();

  toggle(){
    this.isShownFilterBar = !this.isShownFilterBar;
    return this.isShownFilterBar;
  }

}
