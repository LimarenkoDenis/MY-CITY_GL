import { Directive, ElementRef, Input, TemplateRef, ViewContainerRef, HostBinding, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appAcl]'
})
export class AclDirective implements OnInit {
  @HostBinding('class')
  public class = 'myclass';


  // @HostBinding('style.color')
  // public color = 'myclass';


  // @Input('appAcl')
  // public myappAcl: string;


  @Input()
  public set appAcl(value: [string, string]) {
    console.log('input');

    // this.serive - http
    // this.store.select -
    //



    if (value) {

      // this.class = ''

      this.contRef.createEmbeddedView(this.template);
      return;
    }

    this.contRef.clear();
  }

  public constructor(
    private el: ElementRef,
    // private renderer2: Renderer2, ??
    // *
    private template: TemplateRef<any>,
    private contRef: ViewContainerRef
  ) {

  console.log('constructor');

  }

  ngOnInit() {

    console.log('ngOnInit');

  }

}
