import { Component, Input } from '@angular/core';
import * as interfaces from '../../../../interfaces';

@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.scss'],
})
export class SearchCardComponent {

  @Input() video :interfaces.Ivideo | undefined;

  // thumbnailUrl :string | undefined;

  // statictic :interfaces.Istatistics | undefined;

  // title :string | undefined;

  // constructor(){
  //   if (this.video !== undefined){
  //     this.thumbnailUrl = this.video?.snippet?.thumbnails?.standard?.url;
  //     this.statictic = this.video.statistics;
  //     this.title = this.video.snippet.title;
  //   }
//
  // }
}
