import { Pipe, PipeTransform } from '@angular/core';
import { YoutubeCard } from '@src/app/redux/state.models';

@Pipe({
  name: 'sortByKeys',
})

export class SortByKeysPipe implements PipeTransform {
  transform(videos: YoutubeCard[] | null, word: string) {
    if (videos){
      if (!word) {
        return [...videos];
      }
      return videos.filter((elem) => elem.tags
        ?.some(phrase => phrase.includes(word)),
      );
    }
    return null;
  }

}
