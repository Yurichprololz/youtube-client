import { Component, Input } from '@angular/core';
import * as interfaces from '../../../shared/models/videos.model';

@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.scss'],
})
export class SearchCardComponent {
  @Input() video :interfaces.IVideo | undefined;

  @Input() searchValue :string | undefined;


  isFound() :boolean {
    if (this.searchValue && this.video?.snippet.title){
      return this.video?.snippet.title.toLocaleLowerCase().includes(this.searchValue.toLocaleLowerCase());
    }
    return false;
  }
}
