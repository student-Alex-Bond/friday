import { Dispatch } from 'react';

import axios from 'axios';

import { authApi } from '../../../api/cards-api';
import { UserType } from '../types/types';

export const SET_USER = 'login/SET-USER';
export const SET_ERROR = 'login/SET-ERROR';

export const setUser = (user: UserType) =>
  ({
    type: SET_USER,
    payload: user,
  } as const);
export const setError = (error: string | null) =>
  ({ type: SET_ERROR, payload: error } as const);

export const getUserTC = () => (dispatch: Dispatch<any>) => {
  authApi
    .me()
    .then(res => {
      dispatch(setUser(res.data));
    })
    .catch(error => {
      if (axios.isAxiosError(error) && error.response) {
        dispatch(setError(error.message));
      }
    });
};
