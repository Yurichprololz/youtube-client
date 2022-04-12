import { Component, OnInit, OnDestroy } from '@angular/core';
import { SortBy } from '@src/app/shared/models/sort.model';
import { SearchService } from '@src/app/core/services/search.service';
import { SortDirectionService } from '../../services/sort-direction.service';
import { FilterByKeyService } from '../../services/filter-by-key.service';
import { ISubsiption } from '@src/app/shared/models/subscrible-search-result.model';
import { YoutubeAPIService } from '../../services/youtube-api.service';
import { IVideo } from '@shared/models/videos.model';
import { MochDataService } from '@app/youtube/services/moch-data.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})

export class SearchResultsComponent implements OnInit, OnDestroy{
  // searchValue :string = '';

  sortBy: SortBy;

  filterByKeys = '';

  videos: IVideo[] | null = null;

  subscrible: ISubsiption = {
    search: null,
    sort: null,
    filter: null,
  };

  constructor(
    private searchService: SearchService,
    private sortService: SortDirectionService,
    private filterService: FilterByKeyService,
    private youtubeAPI: YoutubeAPIService,
    private videoStorageService: MochDataService) {
    // this.videos = this.mochService.getVideos();
  }

  ngOnInit() {
    this.subscrible.search = this.searchService.searchEmit.subscribe((value) => {
      this.youtubeAPI.getVideos(value).subscribe({
        next:(a) => {
          const ids = a.map((video) => video.id.videoId);
          this.youtubeAPI.getS(ids).subscribe((video) => {
            this.videos = video;
            this.videoStorageService.setVideos(video);
          } );
        },
      });
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
