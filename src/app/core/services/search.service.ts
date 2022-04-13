import { Injectable } from '@angular/core';
import { IVideo } from '@src/app/shared/models/videos.model';
import { YoutubeAPIService } from '@src/app/youtube/services/youtube-api.service';
import { fromEvent, debounceTime, distinctUntilChanged, map, switchMap, Observable, filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private youtubeAPI: YoutubeAPIService){}

  search(): Observable<IVideo[]>{
    const inputEl = document.getElementById('search') as HTMLInputElement;
    return fromEvent(inputEl, 'input')
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        map((a:Event) => a.target as HTMLInputElement),
        filter((input) => input.value.length > 2 || input.value.length === 0),
        switchMap((input) => this.youtubeAPI.getVideos(input.value)),
      );
  }
}
