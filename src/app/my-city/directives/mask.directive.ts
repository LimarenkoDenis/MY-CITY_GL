import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMask]'
})
export class MaskDirective {


  constructor(
    private el: ElementRef) {

  }

  @HostListener('input', ['$event'])
  public mymousemove(event) {

    console.log(this.el.nativeElement.value);

    console.log('input', event);
  }


  @HostListener('focus', ['$event'])
  public myfocus(event) {
    console.log('focus', event);
  }


  @HostListener('blur', ['$event'])
  public myblur(event) {
    console.log('blur', event);
  }
}
