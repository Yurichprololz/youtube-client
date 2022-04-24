import { Component, Input, OnInit } from '@angular/core';
import { Card, SearchCard, YoutubeCard } from '@src/app/redux/state.models';

@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.scss'],
})

export class SearchCardComponent implements OnInit {
  @Input() video!: SearchCard;

  youtubeVideo: YoutubeCard | undefined;

  ngOnInit(): void {
    if (this.video) {
      if (this.isFromYoutube(this.video)){
        this.youtubeVideo = this.video;
      }
    }
  }

  isFromYoutube(card: Card): card is YoutubeCard{
    return (card as YoutubeCard).statictics !== undefined;
  }
}
