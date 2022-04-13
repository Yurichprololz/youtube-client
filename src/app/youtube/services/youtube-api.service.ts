import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISearchResponce } from '@src/app/shared/models/search-video.model';
import { IResponce, IVideo } from '@src/app/shared/models/videos.model';
import { map, mergeMap, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class YoutubeAPIService {

  key = 'AIzaSyCTC4ZquwolqPyoMRr8EjBkAyspfOfp5uU';

  constructor(private http: HttpClient){}

  getVideos(value: string): Observable<IVideo[]>{
    if (!value.trim()) return of([]) ;
    return  this.http.get<ISearchResponce>(`https://www.googleapis.com/youtube/v3/search?type=video&maxResults=15&q=${value}&key=${this.key}&part=snippet`)
      .pipe(
        map((a) => a.items.map((video) => video.id.videoId)),
        mergeMap((keys) => this.getFullInfo(keys)));
  }

  getFullInfo(ids: string[]): Observable<IVideo[]>{
    const stringId = ids.join('%2c');
    return  this.http.get<IResponce>(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&id=${stringId}&key=${this.key}`)
      .pipe(
        map(a => a.items));
  }
}
