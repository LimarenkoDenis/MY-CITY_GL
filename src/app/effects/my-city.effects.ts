import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { MyCityActionTypes, MyCityActions } from '../actions/my-city.actions';


@Injectable()
export class MyCityEffects {


  @Effect()
  loadMyCitys$ = this.actions$.pipe(
    ofType(MyCityActionTypes.LoadMyCitys),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    concatMap(() => EMPTY)
  );


  constructor(private actions$: Actions<MyCityActions>) {}

}
