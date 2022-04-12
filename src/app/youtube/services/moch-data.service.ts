import { Injectable } from '@angular/core';
import * as Interfaces from '@shared/models/videos.model';

@Injectable({
  providedIn: 'root',
})
export class MochDataService {

  videos: Interfaces.IVideo[] | undefined;

  // constructor(){}

  setVideos(value :Interfaces.IVideo[]){
    this.videos = value;
  }

  getVideos(){
    return this.videos;
  }

  findVideo(id :string): Interfaces.IVideo | undefined{
    const a = this.videos?.find((video) => video.id === id);
    console.log(a);
    return a;
  }

}
