import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromUser from './user.reducer';
import * as fromNewUser from '../new-user.reducer';

export interface State {

  users: fromUser.State;
  newUsers: fromNewUser.State;
}

export const reducers: ActionReducerMap<State> = {

  users: fromUser.reducer,
  newUsers: fromNewUser.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
