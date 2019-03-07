import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [CardComponent, ListComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ListComponent]
})
export class MyCityModule { }
