
import { UserActions, UserActionTypes } from '../actions/user.actions';

export interface State {

}

export const initialState: State = {
  isLoading: false,
  data: [],
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
        data: action.payload
      };

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
