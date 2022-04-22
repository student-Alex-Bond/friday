import { Dispatch } from 'react';

import axios from 'axios';

import { authApi } from '../../../api/cards-api';
import { isInitialized, setError } from '../../App/app-reducer';
import { ActionsType, UserType } from '../types/types';

export const SET_USER = 'login/SET-USER';
export const SET_MESSAGE = 'login/SET-MESSAGE';

export const setUser = (user: UserType | null) =>
  ({
    type: SET_USER,
    payload: user,
  } as const);

export const setMessage = (message: string | null) =>
  ({ type: SET_MESSAGE, payload: message } as const);

export const getUserTC = () => (dispatch: Dispatch<ActionsType>) => {
  authApi
    .me()
    .then(res => {
      dispatch(setUser(res.data));
      dispatch(isInitialized(true));
    })
    .catch(error => {
      if (axios.isAxiosError(error) && error.response) {
        dispatch(setError(error.response.data.error));
        dispatch(isInitialized(true));
      }
    });
};

export type LoginUserType = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export const loginUserTC = (user: LoginUserType) => (dispatch: Dispatch<ActionsType>) => {
  authApi
    .login(user)
    .then(response => {
      dispatch(setUser(response.data));
      dispatch(setError(null));
      dispatch(setMessage(response.statusText));
    })
    .catch(e => {
      const error = e.response
        ? e.response.data.error
        : `${e.message}, more details in the console`;
      dispatch(setError(error));
    });
};

export const logoutTC = () => (dispatch: Dispatch<ActionsType>) => {
  authApi
    .logout()
    .then(response => {
      dispatch(setUser(null));
      dispatch(setMessage(response.data.info));
    })
    .catch(e => {
      const error = e.response
        ? e.response.data.error
        : `${e.message}, more details in the console`;
      dispatch(setError(error));
    });
};
