import { Injectable } from '@angular/core';
import mochResponces from '@src/app/shared/moch-responces';
import { IResponce, IVideo } from '@src/app/shared/models/videos.model';

@Injectable({
  providedIn: 'root',
})

export class MochDataService {
  data: IResponce;

  videos: IVideo[];

  constructor(){
    this.data = mochResponces;
    this.videos = this.data.items;
  }

  getVideos(){
    return this.videos;
  }

  findVideo(id :string): IVideo | undefined{
    return this.videos.find((video) => video.id === id);
  }

}
