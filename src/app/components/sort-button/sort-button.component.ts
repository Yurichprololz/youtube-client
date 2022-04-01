import { Component, EventEmitter, Output } from '@angular/core';
import { SortBy } from '@src/app/shared/models/sort.model';

@Component({
  selector: 'app-sort-button',
  templateUrl: './sort-button.component.html',
  styleUrls: ['./sort-button.component.scss'],
})
export class SortButtonComponent {
  @Output() OnSortValue : EventEmitter<SortBy> =  new EventEmitter();

  sort :SortBy;

  changeSortByDate(){
    this.sort = this.sort === 'askDate' ? 'descDate' : 'askDate';
    this.outputSortValue();
  }

  changeSortByView(){
    this.sort = this.sort === 'askView' ? 'descView' : 'askView';
    this.outputSortValue();
  }

  outputSortValue(){
    this.OnSortValue.emit(this.sort);
  }
}
