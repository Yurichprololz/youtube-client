import { Component } from '@angular/core';
import { SortBy } from '@src/app/shared/models/sort.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})

export class MainPageComponent  {
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
