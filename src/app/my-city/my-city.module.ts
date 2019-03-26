import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ListComponent } from './list/list.component';
import { AclDirective } from './directives/acl.directive';
import { MaskDirective } from './directives/mask.directive';

@NgModule({
  declarations: [CardComponent, ListComponent, AclDirective, MaskDirective],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ListComponent]
})
export class MyCityModule { }
