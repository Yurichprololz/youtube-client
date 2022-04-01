import { Pipe, PipeTransform } from '@angular/core';
import { IVideo } from '../shared/models/videos.model';

@Pipe({
  name: 'sortByKeys',
})
export class SortByKeysPipe implements PipeTransform {

  transform(videos: IVideo[] | null, word: string) {
    console.log(word);
    if (videos){
      if (!word) {
        return [...videos];
      }
      console.log(videos.filter((elem) => elem.snippet.tags.includes(word)));
      return videos.filter((elem) => elem.snippet.tags
        .some(phrase => phrase.includes(word))   );
    }
    return null;
  }

}
