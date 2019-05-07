
import { UserActions, UserActionTypes } from '../actions/user.actions';
import { createFeatureSelector, createSelector, MemoizedSelector, MemoizedSelectorWithProps } from '@ngrx/store';


export interface IUser { id: number; name: string; age: number; isActive: boolean; }
export interface State {
  isLoading: boolean;
  data: any[];
  error: string;
  entities: { [id: number]: IUser };
}

export const initialState: State = {
  isLoading: false,
  data: [],
  entities: {},
  error: ''
};

export function reducer(state = initialState, action: UserActions): State {
  switch (action.type) {

    case UserActionTypes.LoadUsers:
      return {
        ...state,
        isLoading: true
      };

    case UserActionTypes.LoadUsersSuccess:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        entities: action.payload.reduce((acc: State['entities'], next: IUser) => {
          return {...acc, ...{ [next.id]: next} };
        }, {})
      };


    case UserActionTypes.AddUser: {
      return {
        ...state,
        data: [...state.data, action.payload]
      }
    }

    case UserActionTypes.RemoveUser: {
      return {
        ...state,
        data: state.data.filter((user: any) => user.id !== action.payload)
      }
    }

    case UserActionTypes.UpdateUser: {
      const index = state.data.findIndex((item) => item.id === action.payload.id);
      const newUsers = [...state.data];
      const user = state.data[index];
      newUsers.splice(index, 1, { ...user, ...action.payload.userToUpdate })


      return {
        ...state,
        data: newUsers
      };
    }


    // case UserActionTypes.LoadUsersError:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     data: action.payload
    //   };

    default:
      return state;
  }
}


export const userFeatureSelector = createFeatureSelector('user');

export const routerFeatureSelector = createFeatureSelector('router');

export const totalUserAmount: MemoizedSelector<State, number> = createSelector(
  userFeatureSelector,
  (user: State) => user.data.length
);


export const activeUsers: MemoizedSelectorWithProps<State, { isActive: boolean }, any[]>
  = createSelector(
    userFeatureSelector,
    (user: State, props: { isActive: boolean }) => {
      return user.data.filter((user) => user.isActive === props.isActive)
    }

  )


export const selectedUser: MemoizedSelectorWithProps<State, { id: number }, any>
  = createSelector(
    userFeatureSelector,
    routerFeatureSelector,
    (user: State, router: any, props: { id: number }) => {
      if (!router.state) {
        return null;
      }
      return user.entities[router.state.params.id];
    }
  );


export const totalUserAge: MemoizedSelector<State, number> = createSelector(
  userFeatureSelector,
  (user: State) => user.data.reduce((acc: number, next: IUser) => acc + next.age, 0)
);


export const extendUsers: MemoizedSelector<State, any> = createSelector(
  userFeatureSelector,
  (user: State) => user.data.reduce((acc: IUser[], next: IUser) => [...acc, {name: next.name}], [])
);



// {
//   1: {
//     id: 1,
//     name: 'Dan',
//     isActive
//   }
// }
