import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() toggleSort: EventEmitter<void> = new EventEmitter<void>();

  @Output() searchListener: EventEmitter<string> = new EventEmitter<string>();

  toggle() {
    this.toggleSort.emit();
  }

  search(value:string) {
    this.searchListener.emit(value);
  }
}
