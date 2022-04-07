import { Component, OnInit, OnDestroy } from '@angular/core';
import * as intefaces from '@shared/models/videos.model';
import mochResponces from '@shared/moch-responces';
import { SortBy } from '@src/app/shared/models/sort.model';
import { SearchService } from '@src/app/core/services/search.service';
import { SortDirectionService } from '../../services/sort-direction.service';
import { FilterByKeyService } from '../../services/filter-by-key.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit, OnDestroy{
  searchValue :string = '';

  sortBy :SortBy;

  filterByKeys = '';

  videos :intefaces.IVideo[];

  constructor(
    private searchS :SearchService,
    private sortService :SortDirectionService,
    private filterService :FilterByKeyService) {
    this.videos = mochResponces.items;
  }

  ngOnInit() {
    this.searchS.searchEmit.subscribe((value) => {
      this.searchValue = value;
    });
    this.sortService.directionEmit.subscribe(() => {
      this.sortBy = this.sortService.getValue();
    });
    this.filterService.filter.subscribe((value:string) => {
      this.filterByKeys = value;
    });
  }

  ngOnDestroy(): void {
    this.searchS.searchEmit.unsubscribe();
    this.sortService.directionEmit.unsubscribe();
    this.filterService.filter.unsubscribe();
  }
}
