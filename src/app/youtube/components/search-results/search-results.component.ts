import { Component, OnInit, OnDestroy } from '@angular/core';
import * as intefaces from '@shared/models/videos.model';
import { SortBy } from '@src/app/shared/models/sort.model';
import { SearchService } from '@src/app/core/services/search.service';
import { SortDirectionService } from '../../services/sort-direction.service';
import { FilterByKeyService } from '../../services/filter-by-key.service';
import { MochDataService } from '../../services/moch-data.service';
import { ISubsiption } from '@src/app/shared/models/subscrible-search-result.model';

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

  subscrible :ISubsiption = {
    search: null,
    sort: null,
    filter: null,
  };

  constructor(
    private mochService :MochDataService,
    private searchS :SearchService,
    private sortService :SortDirectionService,
    private filterService :FilterByKeyService) {
    this.videos = this.mochService.getVideos();
  }

  ngOnInit() {
    this.subscrible.search = this.searchS.searchEmit.subscribe((value) => {
      this.searchValue = value;
    });
    this.subscrible.sort = this.sortService.directionEmit.subscribe(() => {
      this.sortBy = this.sortService.getValue();
    });
    this.subscrible.filter = this.filterService.filter.subscribe((value:string) => {
      this.filterByKeys = value;
    });
  }

  ngOnDestroy(): void {
    if (this.subscrible.filter) this.subscrible.filter.unsubscribe();
    if (this.subscrible.sort) this.subscrible.sort.unsubscribe();
    if (this.subscrible.search) this.subscrible.search.unsubscribe();
  }
}
