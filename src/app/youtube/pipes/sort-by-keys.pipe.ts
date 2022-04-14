import { Pipe, PipeTransform } from '@angular/core';
import { IVideo } from '@shared/models/videos.model';

@Pipe({
  name: 'sortByKeys',
})

export class SortByKeysPipe implements PipeTransform {
  transform(videos: IVideo[] | null, word: string) {
    if (videos){
      if (!word) {
        return [...videos];
      }
      return videos.filter((elem) => elem.snippet?.tags
        ?.some(phrase => phrase.includes(word)),
      );
    }
    return null;
  }

}
