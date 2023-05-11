import { Directive, ElementRef, HostListener } from '@angular/core';
@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  private originalColor: string;
  constructor(private el: ElementRef) {
    this.originalColor = el.nativeElement.style.backgroundColor;
  }

  @HostListener('click')
  onClick() {
    const currentColor = this.el.nativeElement.style.backgroundColor;
    this.el.nativeElement.style.backgroundColor =
      currentColor === 'yellow' ? this.originalColor : 'yellow';
  }
}
