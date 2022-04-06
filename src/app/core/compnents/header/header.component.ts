import { Component } from '@angular/core';
import { ToggleButtonService } from '../../services/toggle-button.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  constructor(private ToggleS :ToggleButtonService){}

  // @Output() toggleSort: EventEmitter<void> = new EventEmitter<void>();

  // @Output() searchListener: EventEmitter<string> = new EventEmitter<string>();

  toggle() {
    this.ToggleS.toggleEmit.emit();
  }

  // search(value:string) {
  //   this.searchListener.emit(value);
  // }
}
