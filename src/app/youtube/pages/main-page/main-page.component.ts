import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToggleButtonService } from '@src/app/core/services/toggle-button.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})

export class MainPageComponent implements OnInit, OnDestroy  {
  constructor(private ToggleS:ToggleButtonService){}

  filterByKeys = '';

  isSortShown = false;

  getFilterByKeys(value :string) {
    this.filterByKeys = value;
  }

  toggle(){
    this.isSortShown = this.ToggleS.toggle();
  }

  ngOnInit() {
    this.ToggleS.toggleEmit.subscribe(() => this.toggle());
  }

  ngOnDestroy(): void {
    this.ToggleS.toggleEmit.unsubscribe();
  }

}
