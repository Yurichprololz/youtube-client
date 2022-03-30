import { Component } from '@angular/core';
import * as intefaces from '../../../interfaces';
import mochResponces from '../../../moch-responces';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent {
  responce :intefaces.Iresponce;

  videos :intefaces.Ivideo[];

  constructor(){
    this.responce = mochResponces;

    this.videos = this.responce.items;
  }


}
