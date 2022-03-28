import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() toggleSort: EventEmitter<any> = new EventEmitter<any>();

  toggle(){
    this.toggleSort.emit();
  }

}
