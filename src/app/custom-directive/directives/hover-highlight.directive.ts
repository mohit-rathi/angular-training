import {
  Directive,
  ElementRef,
  Renderer2,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[hoverHighlight]',
})
export class HoverHighlightDirective {
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter', ['$event']) onMouseEnter(event: Event) {
    // console.log(event);
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'background-color',
    //   'lightpink'
    // );
    this.backgroundColor = 'lightpink';
  }

  @HostListener('mouseleave', ['$event']) onMouseLeave(event: Event) {
    // console.log(event);
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'background-color',
    //   'transparent'
    // );
    this.backgroundColor = 'transparent';
  }
}
