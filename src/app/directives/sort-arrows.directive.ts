import {  Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';
import { SortBy } from '@shared/models/sort.model';

@Directive({
  selector: '[appSortArrows]',
})
export class SortArrowsDirective implements OnChanges {
  @Input() sort:SortBy;

  @Input() isSortByView!:boolean;

  constructor(private element :ElementRef, private ref: Renderer2) { }

  ngOnChanges() {
    this.update();
  }

  update() {
    this.ref.removeClass(this.element.nativeElement, 'arrow-down');
    this.ref.removeClass(this.element.nativeElement, 'arrow-up');

    switch (this.sort) {
      case 'askDate':
        if (!this.isSortByView){
          this.ref.addClass(this.element.nativeElement, 'arrow-down');
        }
        break;
      case 'descDate':
        if (!this.isSortByView){
          this.ref.addClass(this.element.nativeElement, 'arrow-up');
        }
        break;
      case 'askView':
        if (this.isSortByView){
          this.ref.addClass(this.element.nativeElement, 'arrow-down');
        }
        break;
      case 'descView':
        if (this.isSortByView){
          this.ref.addClass(this.element.nativeElement, 'arrow-up');
        }
        break;
      default:
        break;
    }
  }

}
