import { Dispatch } from 'react';

import { authApi } from '../../api/cards-api';
import { newUserType } from '../../api/types';

import { setError, SetErrorType } from 'componets/App/app-reducer';

const initialState: InitialStateType = {
  addedUser: null,
};

type InitialStateType = {
  addedUser: AddedUserType | null;
};

export type AddedUserType = {
  email: string;
  password: string;
};

const ADDED_USER = 'register/ADDED-USER';

type ActionType = ReturnType<typeof addedUser> | SetErrorType;

export const registerReducer = (
  state: InitialStateType = initialState,
  action: ActionType,
): InitialStateType => {
  switch (action.type) {
    case ADDED_USER: {
      return { ...state, addedUser: action.payload };
    }
    default:
      return state;
  }
};

export const addedUser = (newUser: newUserType) =>
  ({ type: ADDED_USER, payload: newUser } as const);

export const createUserTC =
  (newUser: newUserType) => (dispatch: Dispatch<ActionType>) => {
    authApi
      .register(newUser)
      .then(response => {
        dispatch(addedUser(response.data));
      })
      .catch(error => {
        dispatch(setError(error.response.data.error));
      });
  };
