import { Component, EventEmitter, Output } from '@angular/core';
import { FilterByKeyService } from '../../services/filter-by-key.service';
import { SortDirectionService } from '../../services/sort-direction.service';

@Component({
  selector: 'app-sort-button',
  templateUrl: './sort-button.component.html',
  styleUrls: ['./sort-button.component.scss'],
})

export class SortButtonComponent {
  constructor(private direction :SortDirectionService, private filterService :FilterByKeyService){}

  @Output() filterByKeys : EventEmitter<string> =  new EventEmitter();

  byKeys = '';

  changeSortByDate(){
    this.direction.changeSortByDate();
  }

  changeSortByView(){
    this.direction.changeSortByView();
  }

  sendByKeys(){
    this.filterService.filter.emit(this.byKeys);
  }

}
