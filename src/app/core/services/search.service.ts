import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { updateYoutubeCardsAction } from '@src/app/redux/actions/youtube.actions';
import { YoutubeCard } from '@src/app/redux/state.models';
import { YoutubeAPIService } from '@src/app/youtube/services/youtube-api.service';
import { fromEvent, debounceTime, map, switchMap, Observable, filter, distinctUntilChanged, catchError, EMPTY, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private youtubeAPI: YoutubeAPIService, private store: Store){}

  searchList(): Observable<YoutubeCard[]>{
    const inputEl = document.getElementById('search') as HTMLInputElement;
    return fromEvent(inputEl, 'input')
      .pipe(
        map((event:Event) => event.target as HTMLInputElement),
        map((input) => input.value),
        debounceTime(500),
        distinctUntilChanged(),
        filter((value) => value.length > 2 || value.length === 0),
        switchMap((word) => this.youtubeAPI.getVideos(word)),
        tap((YoutubeCards) => this.store.dispatch(updateYoutubeCardsAction({ YoutubeCards }))),
        catchError(() => EMPTY),
      );
  }

  getSingleVideo(id: string): Observable<YoutubeCard>{
    const arr = Array(id);
    return this.youtubeAPI.getFullInfo(arr)
      .pipe(
        map((a) => a[0]),
      );
  }
}
