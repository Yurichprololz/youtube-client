import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent  {
  value:string = '';

  @Output() searchListeter: EventEmitter<string> = new EventEmitter<string>();

  changeListeter(){
    this.searchListeter.emit(this.value);
  }

}
