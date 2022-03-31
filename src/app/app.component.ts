import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'youtube-client';

  searchValue = '';

  isSortShown = false;

  toggleSortShow(){
    this.isSortShown = !this.isSortShown;
  }

  getSearchValue(value:string){
    this.searchValue = value;
  }


}
