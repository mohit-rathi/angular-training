import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[customHighlight]',
})
export class CustomHighlightDirective {
  @Input() highlightColor: string = 'transparent';
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  constructor() {}

  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = 'transparent';
  }
}
