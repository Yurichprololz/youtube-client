import {
  Directive, ElementRef, Input, Renderer2, OnInit,
} from '@angular/core';

@Directive({
  selector: '[appColorizeBorder]',
})

export class ColorizeBorderDirective implements OnInit {
  @Input('appColorizeBorder') date: string | undefined;

  constructor(private element :ElementRef, private ref: Renderer2) { }

  ngOnInit() {
    this.highLight();
  }

  highLight() {
    const color = this.getColor();
    this.ref.setStyle(this.element.nativeElement, 'border-color', color);
  }

  getColor() :string {
    if (!this.date) return 'yellow';
    const now = new Date();
    const publishedDate = new Date(this.date);
    const dateAfterWeek = new Date(publishedDate.setDate(publishedDate.getDate() + 7));
    const dateAfterMonth = new Date(publishedDate.setMonth(publishedDate.getMonth() + 1));
    const dateAfterHalfYear = new Date(publishedDate.setMonth(publishedDate.getMonth() + 6));

    if (dateAfterHalfYear < now) {
      return 'red';
    }
    if (dateAfterMonth < now) {
      return 'yellow';
    }
    if (dateAfterWeek < now) {
      return 'green';
    }
    return 'blue';
  }
}
