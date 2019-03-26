// import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

// @Directive({
//   selector: '[appLable]',
//   exportAs: 'lable'
// })
// export class LableDirective implements OnInit {

//   public active = false;

//   public constructor(
//     private _elementRef: ElementRef
//   ) {
//   }

//   public ngOnInit() {
//     Promise.resolve().then(() => this.onBlur());

//   }

//   @HostListener('focus')
//   public onFocus() {
//     this.active = true;
//   }

//   @HostListener('blur')
//   public onBlur() {
//     const value: string = this._elementRef.nativeElement.value;
//     this.active = value
//       ? true
//       : false;
//   }
// }


// <div [ngClass]="{toched:c.active}" class="form-group-factor">
// <label>Code provided</label>
// <input appLable #c="lable" type="number">
// </div>





// import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

// @Directive({
//   selector: '[appNgAcl]'
// })

// export class NgAclDirective {

//   public constructor(
//     // tslint:disable-next-line
//     private _templateRef: TemplateRef<any>,
//     private _viewContainer: ViewContainerRef,
//   ) {}

//   // value format : ['/widgets/exchangeRate', 'PUT']
//   @Input() public set appNgAcl(value: string[]) {
//       const aclMap = {}
//       if (aclMap[value[0]] && aclMap[value[0]].includes('*')) {
//         this._viewContainer.createEmbeddedView(this._templateRef);
//         return;
//       }

//       if (aclMap[value[0]] && aclMap[value[0]].includes(value[1])) {
//         this._viewContainer.createEmbeddedView(this._templateRef);
//         return;
//       }
//       this._viewContainer.clear();
//     });
//   }
// }

// *appNgAcl="['exchange', 'GET']"
