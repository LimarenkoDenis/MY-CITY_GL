import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { NewUser } from './new-user.model';
import { NewUserActions, NewUserActionTypes } from './new-user.actions';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface State extends EntityState<NewUser> {
  // additional entities state properties
}

export const adapter: EntityAdapter<NewUser> = createEntityAdapter<NewUser>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export function reducer(
  state = initialState,
  action: NewUserActions
): State {
  switch (action.type) {
    case NewUserActionTypes.AddNewUser: {
      return adapter.addOne(action.payload.newUser, state);
    }

    case NewUserActionTypes.UpsertNewUser: {
      return adapter.upsertOne(action.payload.newUser, state);
    }

    case NewUserActionTypes.AddNewUsers: {
      return adapter.addMany(action.payload.newUsers, state);
    }

    case NewUserActionTypes.UpsertNewUsers: {
      return adapter.upsertMany(action.payload.newUsers, state);
    }

    case NewUserActionTypes.UpdateNewUser: {
      return adapter.updateOne(action.payload.newUser, state);
    }

    case NewUserActionTypes.UpdateNewUsers: {
      return adapter.updateMany(action.payload.newUsers, state);
    }

    case NewUserActionTypes.DeleteNewUser: {
      return adapter.removeOne(action.payload.id, state);
    }

    case NewUserActionTypes.DeleteNewUsers: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case NewUserActionTypes.LoadNewUsers: {
      return adapter.addAll(action.payload.newUsers, state);
    }

    case NewUserActionTypes.ClearNewUsers: {
      return adapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();



const newUserFeatureSelector =  createFeatureSelector('newUsers');
export const byIdSelector: any = createSelector(newUserFeatureSelector, selectEntities);

export const byId: any = createSelector(
  byIdSelector,
  (state, props) => {
    return state && state[props.id];
  }
);
