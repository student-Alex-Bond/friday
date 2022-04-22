import { Dispatch } from 'react';

import { authApi } from '../../api/cards-api';
import { newUserType } from '../../api/types';

const initialState: InitialStateType = {
  addedUser: null,
  error: null,
};

type InitialStateType = {
  addedUser: AddedUserType | null;
  error: string | null;
};

export type AddedUserType = {
  email: string;
  password: string;
};

const ADDED_USER = 'register/ADDED-USER';
const SET_ERROR = 'register/SET_ERROR';

type ActionType = ReturnType<typeof addedUser> | ReturnType<typeof setError>;

export const registerReducer = (
  state: InitialStateType = initialState,
  action: ActionType,
): InitialStateType => {
  switch (action.type) {
    case ADDED_USER: {
      return { ...state, addedUser: action.payload };
    }
    case SET_ERROR: {
      return { ...state, error: action.payload };
    }
    default:
      return state;
  }
};

export const addedUser = (newUser: newUserType) =>
  ({ type: ADDED_USER, payload: newUser } as const);

export const setError = (error: string | null) =>
  ({ type: SET_ERROR, payload: error } as const);

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
