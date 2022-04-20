import { Component, OnInit, OnDestroy } from '@angular/core';
import { SortBy } from '@src/app/shared/models/sort.model';
import { SearchService } from '@src/app/core/services/search.service';
import { SortDirectionService } from '../../services/sort-direction.service';
import { FilterByKeyService } from '../../services/filter-by-key.service';
import { ISubsiption } from '@src/app/shared/models/subscrible-search-result.model';
import { YoutubeCard } from '@src/app/redux/state.models';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})

export class SearchResultsComponent implements OnInit, OnDestroy{
  sortBy: SortBy;

  filterByKeys = '';

  videos: YoutubeCard[] | null = null;

  subscrible: ISubsiption = {
    search: null,
    sort: null,
    filter: null,
  };

  constructor(
    private searchService: SearchService,
    private sortService: SortDirectionService,
    private filterService: FilterByKeyService) {
  }

  ngOnInit() {

    this.searchService.searchList()
      .subscribe({
        next:(video) => {
          this.videos = video;
        },
        error:(error) => {
          console.log(error);
          this.videos = [];
        },
      });

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
