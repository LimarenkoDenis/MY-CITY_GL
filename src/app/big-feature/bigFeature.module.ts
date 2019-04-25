import { BigFeatureComponent } from './bigFeature.component';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';


const ROUTES: Route[] = [
  { path: '', component: BigFeatureComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [
    RouterModule,
  ],
  declarations: [
    BigFeatureComponent,
  ],
})
export class BigFeatureModule { }
