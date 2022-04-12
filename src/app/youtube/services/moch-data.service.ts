import { Injectable } from '@angular/core';
import { IVideo } from '@src/app/shared/models/videos.model';

@Injectable({
  providedIn: 'root',
})

export class MochDataService {

  videos: IVideo[] | undefined;

  setVideos(value :IVideo[]){
    this.videos = value;
  }

  getVideos(){
    return this.videos;
  }

  findVideo(id :string): IVideo | undefined{
    const a = this.videos?.find((video) => video.id === id);
    return a;
  }

}
