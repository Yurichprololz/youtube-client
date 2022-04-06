import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import * as intefaces from '@shared/models/videos.model';
import mochResponces from '@shared/moch-responces';
import { SortBy } from '@src/app/shared/models/sort.model';
import { SearchService } from '@src/app/core/services/search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit, OnDestroy{
  // @Input() searchValue :string | undefined;
  searchValue :string = '';

  @Input() sortBy:SortBy | undefined;

  @Input() filterByKeys!:string;

  responce :intefaces.IResponce;

  videos :intefaces.IVideo[];

  constructor(private searchS :SearchService) {
    this.responce = mochResponces;

    this.videos = this.responce.items;
  }

  ngOnInit() {
    this.searchS.searchEmit.subscribe((value) => {
      this.searchValue = value;
    });
  }

  ngOnDestroy(): void {
    this.searchS.searchEmit.unsubscribe();
  }
}
