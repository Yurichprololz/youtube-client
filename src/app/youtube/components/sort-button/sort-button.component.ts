import { Component, EventEmitter, Output } from '@angular/core';
import { SortDirectionService } from '../../services/sort-direction.service';

@Component({
  selector: 'app-sort-button',
  templateUrl: './sort-button.component.html',
  styleUrls: ['./sort-button.component.scss'],
})
export class SortButtonComponent {
  constructor(private direction :SortDirectionService){}

  @Output() filterByKeys : EventEmitter<string> =  new EventEmitter();

  byKeys = '';

  changeSortByDate(){
    this.direction.changeSortByDate();
  }

  changeSortByView(){
    this.direction.changeSortByView();
  }

  sendByKeys(){
    this.filterByKeys.emit(this.byKeys);
  }

}
