import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomd]',
})
export class CustomdDirective {
  constructor(e: ElementRef) {
    console.log(e);
    e.nativeElement.style.color = 'white';
    e.nativeElement.style.backgroundColor = '#42545c';
    e.nativeElement.style.padding = '1rem';
  }
}
