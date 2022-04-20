import { SET_ERROR, SET_USER } from './actions/actions';
import { ActionsType, InitialStateType } from './types/types';

const initialState: InitialStateType = {
  user: null,
  errorMessage: null,
};

export const loginReducer = (
  state: InitialStateType = initialState,
  action: ActionsType,
): InitialStateType => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case SET_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};
