import { Component, OnInit, OnDestroy } from '@angular/core';
import { SortBy } from '@src/app/shared/models/sort.model';
import { SearchService } from '@src/app/core/services/search.service';
import { SortDirectionService } from '../../services/sort-direction.service';
import { FilterByKeyService } from '../../services/filter-by-key.service';
import { ISubsiption } from '@src/app/shared/models/subscrible-search-result.model';
import {  Store } from '@ngrx/store';
import { selectAllCards } from '@src/app/redux/selectors/app.selector';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})

export class SearchResultsComponent implements OnInit, OnDestroy{
  sortBy: SortBy;

  filterByKeys = '';

  videos$ = this.store.select(selectAllCards);

  subscrible: ISubsiption = {
    search: null,
    sort: null,
    filter: null,
  };

  constructor(
    private searchService: SearchService,
    private sortService: SortDirectionService,
    private filterService: FilterByKeyService,
    private store: Store) {
  }

  ngOnInit() {
    this.subscrible.search = this.searchService.searchList()
      .subscribe();

    this.subscrible.sort = this.sortService.directionEmit.subscribe(
      () => this.sortBy = this.sortService.getValue(),
      () => this.sortBy = 'askView');

    this.subscrible.filter = this.filterService.filter.subscribe(
      (value:string) => this.filterByKeys = value,
      (error: Error) => {
        console.log(error);
        this.filterByKeys = '';
      },
    );
  }

  ngOnDestroy(): void {
    if (this.subscrible.filter) this.subscrible.filter.unsubscribe();
    if (this.subscrible.sort) this.subscrible.sort.unsubscribe();
    if (this.subscrible.search) this.subscrible.search.unsubscribe();
  }
}
