import { Component, Input } from '@angular/core';
import { IVideo } from '@src/app/shared/models/videos.model';

@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.scss'],
})

export class SearchCardComponent {
  @Input() video: IVideo | undefined;
}
