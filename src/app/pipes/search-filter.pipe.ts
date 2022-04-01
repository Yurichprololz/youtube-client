import { Pipe, PipeTransform } from '@angular/core';
import { IVideo } from '../shared/models/videos.model';

@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {
  transform(videos: IVideo[], value: string | undefined): IVideo[] | null {
    if (value) {
      return videos.filter((elem) => elem.snippet.title.toLowerCase()
        .includes(value.toLowerCase()));
    }
    return null;
  }
}
