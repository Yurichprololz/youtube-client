import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToggleButtonService } from '@src/app/core/services/toggle-button.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})

export class MainPageComponent implements OnInit, OnDestroy  {
  constructor(private ToggleService:ToggleButtonService){}

  isSortShown = false;

  toggle(){
    this.isSortShown = this.ToggleService.toggle();
  }

  ngOnInit() {
    this.ToggleService.toggleEmit.subscribe(() => this.toggle());
  }

  ngOnDestroy(): void {
    this.ToggleService.toggleEmit.unsubscribe();
  }

}
