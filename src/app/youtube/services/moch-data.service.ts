import { Injectable } from '@angular/core';
import mochResponces from '@src/app/shared/moch-responces';
import * as Interfaces from '@shared/models/videos.model';

@Injectable({
  providedIn: 'root',
})
export class MochDataService {
  data: Interfaces.IResponce;

  videos: Interfaces.IVideo[];

  constructor(){
    this.data = mochResponces;
    this.videos = this.data.items;
  }

  getVideos(){
    return this.videos;
  }

  findVideo(id :string): Interfaces.IVideo | undefined{
    return this.videos.find((video) => video.id === id);
  }

}
