import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToggleButtonService } from '@src/app/core/services/toggle-button.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})

export class MainPageComponent implements  OnInit, OnDestroy {
  constructor(private ToggleService: ToggleButtonService){}

  isSortShown = false;

  subsrible: Subscription | null = null;

  toggle(){
    this.isSortShown = this.ToggleService.toggle();
  }

  ngOnInit() {
    this.subsrible = this.ToggleService.toggleEmit.subscribe(() => this.toggle());
  }

  ngOnDestroy(): void {
    if (!!this.subsrible){
      this.subsrible.unsubscribe();
    }
  }

}
