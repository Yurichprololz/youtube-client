import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() toggleSort: EventEmitter<void> = new EventEmitter<void>();

  toggle(){
    this.toggleSort.emit();
  }

  search(value:string){
    console.log(value);
  }

}
