import { Component, Input } from '@angular/core';
import { YoutubeCard } from '@src/app/redux/state.models';

@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.scss'],
})

export class SearchCardComponent {
  @Input() video: YoutubeCard | undefined;
}
