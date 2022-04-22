import { SET_USER } from './actions';
import { ActionsType, InitialStateType } from './types';

const initialState: InitialStateType = {
  user: null,
};

export const loginReducer = (
  state: InitialStateType = initialState,
  action: ActionsType,
): InitialStateType => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
