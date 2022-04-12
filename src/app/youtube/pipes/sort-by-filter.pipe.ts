import { Pipe, PipeTransform } from '@angular/core';
import { SortBy } from '@shared/models/sort.model';
import { IVideo } from '@shared/models/videos.model';

@Pipe({
  name: 'sortByFilter',
})

export class SortByFilterPipe implements PipeTransform {

  transform(videos: IVideo[] | null, value: SortBy | undefined): IVideo[] | null {
    if (videos) {
      if (!value){
        return [...videos];
      }
      return videos.sort(this.sorting(value));
    }
    return null;
  }

  sorting(value: SortBy){
    switch (value) {
      case 'askDate':
        return (elem1: IVideo, elem2: IVideo) => new Date(elem1.snippet.publishedAt)  > new Date(elem2.snippet.publishedAt) ? -1 : 1;
      case 'askView':
        return (elem1: IVideo, elem2: IVideo) => Number(elem1.statistics.viewCount)  - Number(elem2.statistics.viewCount);
      case 'descDate':
        return (elem1: IVideo, elem2: IVideo) => new Date(elem1.snippet.publishedAt)  > new Date(elem2.snippet.publishedAt) ? 1 : -1;
      default:
        return (elem1: IVideo, elem2: IVideo) => Number(elem2.statistics.viewCount)  - Number(elem1.statistics.viewCount);
    }
  }

}
