import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appAcl]'
})
export class AclDirective {

  @Input('appAcl')
  public color: string;

  @Input()
  mycolor;

  public constructor(
    private el: ElementRef
  ) {

  }

  @HostListener('click', ['$event'])
  public myClick(event) {

    console.log('mycolor', this.mycolor);

    this.el.nativeElement.style.backgroundColor = this.color;
    console.log('click', event);
    console.log(this.el.nativeElement);

  }

  // @HostListener('mousemove', ['$event'])
  // public mymousemove(event) {
  //   console.log('mousemove', event);
  // }



}
