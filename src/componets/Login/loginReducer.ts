import { CHANGE_PERSON_INFO, SET_USER } from './actions';
import { ActionsType, InitialStateType } from './types';

const initialState = {
  user: null,
};

export const loginReducer = (
  state: InitialStateType = initialState,
  action: ActionsType,
): InitialStateType => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload.user };
    case CHANGE_PERSON_INFO:
      if (state.user) {
        return {
          ...state,
          user: {
            ...state.user,
            name: action.payload.name,
            avatar: action.payload.avatar,
          },
        };
      }
      return state;
    default:
      return state;
  }
};
