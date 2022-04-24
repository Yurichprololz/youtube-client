import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { YoutubeCard } from '@src/app/redux/state.models';
import { ISearchResponce } from '@src/app/shared/models/search-video.model';
import { IResponce } from '@src/app/shared/models/videos.model';
import { catchError, EMPTY, map, mergeMap, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class YoutubeAPIService {

  constructor(private http: HttpClient){}

  getVideos(value: string): Observable<YoutubeCard[]>{
    const params = new HttpParams()
      .set( 'type', 'video')
      .set( 'maxResults', '15')
      .set( 'part', 'snippet');

    if (!value.trim()) return of([]);
    return  this.http.get<ISearchResponce>(`search?q=${value}`, { params })
      .pipe(
        map((a) => a.items.map((video) => video.id.videoId)),
        mergeMap((keys) => this.getFullInfo(keys)),
        catchError(() => EMPTY),
      );
  }

  getFullInfo(ids: string[]): Observable<YoutubeCard[]>{
    const stringId = ids.join('%2c');
    return  this.http.get<IResponce>(`videos?part=snippet%2Cstatistics&id=${stringId}`)
      .pipe(
        map(a => a.items),
        map((videos) => videos.map((video) => {
          return {
            title: video.snippet.title,
            description: video.snippet.description,
            linkImage: video.snippet.thumbnails.medium.url,
            linkVideo: 'ds',
            creationDate: video.snippet.publishedAt,
            statictics: video.statistics,
            id: video.id,
            tags: video.snippet.tags,
          };
        }) ));
  }
}
