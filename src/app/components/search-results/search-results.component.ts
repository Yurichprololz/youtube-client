import { Component, Input } from '@angular/core';
import * as intefaces from '../../shared/models/videos.model';
import mochResponces from '../../shared/moch-responces';
import { SortBy } from '@src/app/shared/models/sort.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent {
  @Input() searchValue :string | undefined;

  @Input() sortBy:SortBy | undefined;

  @Input() filterByKeys!:string;

  responce :intefaces.IResponce;

  videos :intefaces.IVideo[];

  constructor() {
    this.responce = mochResponces;

    this.videos = this.responce.items;
  }
}
