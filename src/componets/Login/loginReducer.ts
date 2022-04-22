import { SET_USER } from './actions/actions';
import { ActionsType, InitialStateType } from './types/types';

const initialState: InitialStateType = {
  user: null,

  message: null,
};

export const loginReducer = (
  state: InitialStateType = initialState,
  action: ActionsType,
): InitialStateType => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };

    case 'login/SET-MESSAGE': {
      return { ...state, message: action.payload };
    }
    default:
      return state;
  }
};
