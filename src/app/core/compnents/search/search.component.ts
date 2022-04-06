import { Component } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  value:string = '';

  constructor(private searchService :SearchService){}

  searchListeter() {
    this.searchService.searchEmit.emit(this.value);
  }
}
