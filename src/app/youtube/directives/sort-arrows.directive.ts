import {  Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { SortBy } from '@shared/models/sort.model';
import { SortDirectionService } from '../services/sort-direction.service';

@Directive({
  selector: '[appSortArrows]',
})
export class SortArrowsDirective implements  OnInit {
  sort:SortBy;

  @Input() isSortByView!:boolean;

  constructor(private element :ElementRef, private ref: Renderer2, private service: SortDirectionService) { }

  ngOnInit(): void {
    this.service.directionEmit.subscribe(() => this.update());
  }

  update() {
    this.sort = this.service.getValue();
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
