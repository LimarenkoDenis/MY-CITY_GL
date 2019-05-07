import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromUser from './user.reducer';
import * as fromProducts from './../products.reducer';

import { routerReducer } from '@ngrx/router-store';

export interface State {

  user: fromUser.State;
  router: any,
  products: any

  // ...
}

export const reducers: ActionReducerMap<State> = {

  user: fromUser.reducer,
  router: routerReducer,
  products: fromProducts.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
