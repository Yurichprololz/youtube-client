import { Injectable, EventEmitter } from '@angular/core';
import { SortBy } from '@src/app/shared/models/sort.model';

@Injectable({
  providedIn: 'root',
})

export class SortDirectionService {
  directionEmit = new EventEmitter<void>();

  value: SortBy;

  changeSortByDate(){
    this.value = this.value === 'askDate' ? 'descDate' : 'askDate';
    this.directionEmit.emit();
    return this.value;
  }

  changeSortByView(){
    this.value = this.value === 'askView' ? 'descView' : 'askView';
    this.directionEmit.emit();
    return this.value;
  }

  getValue(){
    return this.value;
  }
}
