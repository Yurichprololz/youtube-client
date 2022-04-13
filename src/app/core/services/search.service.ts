import { Injectable } from '@angular/core';
import { IVideo } from '@src/app/shared/models/videos.model';
import { YoutubeAPIService } from '@src/app/youtube/services/youtube-api.service';
import { fromEvent, debounceTime, map, switchMap, Observable, filter, distinctUntilChanged } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private youtubeAPI: YoutubeAPIService){}

  searchList(): Observable<IVideo[]>{
    const inputEl = document.getElementById('search') as HTMLInputElement;
    return fromEvent(inputEl, 'input')
      .pipe(
        map((event:Event) => event.target as HTMLInputElement),
        map((input) => input.value),
        debounceTime(500),
        distinctUntilChanged(),
        filter((value) => value.length > 2 || value.length === 0),
        switchMap((word) => this.youtubeAPI.getVideos(word)),
      );
  }

  getSingleVideo(id: string){
    const arr = Array(id);
    return this.youtubeAPI.getFullInfo(arr)
      .pipe(
        map((a) => a[0]),
      );
  }
}
