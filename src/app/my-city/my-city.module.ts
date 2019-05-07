import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ListComponent } from './list/list.component';
import { AclDirective } from './directives/acl.directive';
import { MaskDirective } from './directives/mask.directive';
import { LableDirective } from './directives/lable.directive';
import { FilterPipe } from './pipes/filter.pipe';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import * as fromMyCity from './state/reducers/my-city.reducer';
import { EffectsModule } from '@ngrx/effects';
import { MyCityEffects } from './state/effects/my-city.effects';

@NgModule({
  declarations: [CardComponent, ListComponent, AclDirective, MaskDirective, LableDirective, FilterPipe],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: ListComponent}
    ]),
    StoreModule.forFeature('myCity', fromMyCity.reducer),
    EffectsModule.forFeature([MyCityEffects])
  ],
  exports: [ListComponent]
})
export class MyCityModule { }
