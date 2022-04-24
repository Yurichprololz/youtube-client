import { Pipe, PipeTransform } from '@angular/core';
import { SortBy } from '@shared/models/sort.model';
import { YoutubeCard } from '@src/app/redux/state.models';

@Pipe({
  name: 'sortByFilter',
})

export class SortByFilterPipe implements PipeTransform {

  transform(videos: YoutubeCard[] | null, value: SortBy | undefined): YoutubeCard[] | null {
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
        return (elem1: YoutubeCard, elem2: YoutubeCard) => new Date(elem1.creationDate)  > new Date(elem2.creationDate) ? -1 : 1;
      case 'askView':
        return (elem1: YoutubeCard, elem2: YoutubeCard) => Number(elem1.statictics.viewCount)  - Number(elem2.statictics.viewCount);
      case 'descDate':
        return (elem1: YoutubeCard, elem2: YoutubeCard) => new Date(elem1.creationDate)  > new Date(elem2.creationDate) ? 1 : -1;
      default:
        return (elem1: YoutubeCard, elem2: YoutubeCard) => Number(elem2.statictics.viewCount)  - Number(elem1.statictics.viewCount);
    }
  }

}
