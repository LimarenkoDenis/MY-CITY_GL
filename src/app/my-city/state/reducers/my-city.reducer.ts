
import { MyCityActions, MyCityActionTypes } from '../actions/my-city.actions';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: MyCityActions): State {
  switch (action.type) {

    case MyCityActionTypes.LoadMyCitys:
      return state;

    default:
      return state;
  }
}
