import { Component } from '@angular/core';
import { SortBy } from '@shared/models/sort.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'youtube-client';

  searchValue = '';

  isSortShown = false;

  sortBy :SortBy = undefined;

  filterByKeys = '';

  toggleSortShow() {
    this.isSortShown = !this.isSortShown;
  }

  getSearchValue(value:string) {
    this.searchValue = value;
  }

  getSortValue(value :SortBy) {
    this.sortBy = value;
  }

  getFilterByKeys(value :string) {
    this.filterByKeys = value;
  }
}
