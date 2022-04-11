import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISearchVideo } from '@src/app/shared/models/search-video.model';
import { IResponce, IVideo } from '@src/app/shared/models/videos.model';
import { map, Observable } from 'rxjs';
// import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class YoutubeAPIService {

  key = 'AIzaSyBJar6F0trLLUCyhH77i5rCGJul8uyb2-E';

  constructor(private http :HttpClient){}

  getVideos(value :string): Observable<ISearchVideo[]>{
    return  this.http.get<IResponce>(`https://www.googleapis.com/youtube/v3/search?type=video&maxResults=15&q=${value}&key=${this.key}&part=snippet`)
      .pipe(map(a => a.items)) as Observable<ISearchVideo[]>;
  }

  getS(ids :string[]){
    const stringId = ids.join('%2c');
    return  this.http.get<IResponce>(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&id=${stringId}&key=${this.key}`)
      .pipe(map(a => a.items)) as Observable<IVideo[]>;
  }
}
