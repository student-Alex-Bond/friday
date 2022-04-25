import { Dispatch } from 'react';

import axios from 'axios';

import { authApi } from '../../api/cards-api';
import { UpdateUserType } from '../../api/types';
import { isInitialized, setAppStatus, setError, setMessage } from '../App/app-reducer';

import { ActionsType, UserType } from './types';

export const SET_USER = 'login/SET-USER';
export const CHANGE_PERSON_INFO = 'login/CHANGE-PERSON-INFO';

export const setUser = (user: UserType | null) =>
  ({
    type: SET_USER,
    payload: { user },
  } as const);

export const changePersonalInfo = (changedInfo: UpdateUserType) =>
  ({ type: CHANGE_PERSON_INFO, payload: changedInfo } as const);

export const changePersonalInfoTC =
  (changedInfo: UpdateUserType) => (dispatch: Dispatch<ActionsType>) => {
    dispatch(setAppStatus('loading'));
    authApi
      .updateUser(changedInfo)
      .then(response => {
        dispatch(changePersonalInfo(response.data.updatedUser));
        dispatch(setAppStatus('succeeded'));
      })
      .catch(e => {
        const error = e.response
          ? e.response.data.error
          : `${e.message}, more details in the console`;
        dispatch(setError(error));
        dispatch(setAppStatus('failed'));
      });
  };

export const getUserTC = () => (dispatch: Dispatch<ActionsType>) => {
  dispatch(setAppStatus('loading'));
  authApi
    .me()
    .then(res => {
      dispatch(setUser(res.data));
      dispatch(isInitialized(true));
      dispatch(setAppStatus('succeeded'));
    })
    .catch(error => {
      // axios.isAxiosError(error) && error.response это ошибки самого axios происходят когда сервер живой
      if (axios.isAxiosError(error) && error.response) {
        dispatch(setError(error.response.data.error));
        dispatch(isInitialized(true));
        dispatch(setAppStatus('failed'));
        return;
      }
      // это ошибки когда нет связи с сервером
      dispatch(setError(error.message));
      dispatch(isInitialized(true));
      dispatch(setAppStatus('failed'));
    });
};

export type LoginUserType = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export const loginUserTC = (user: LoginUserType) => (dispatch: Dispatch<ActionsType>) => {
  dispatch(setAppStatus('loading'));
  authApi
    .login(user)
    .then(response => {
      dispatch(setUser(response.data));
      dispatch(setError(null));
      dispatch(setMessage(response.statusText));
      dispatch(setAppStatus('succeeded'));
    })
    .catch(e => {
      const error = e.response
        ? e.response.data.error
        : `${e.message}, more details in the console`;
      dispatch(setError(error));
      dispatch(setAppStatus('failed'));
    });
};

export const logoutTC = () => (dispatch: Dispatch<ActionsType>) => {
  dispatch(setAppStatus('loading'));
  authApi
    .logout()
    .then(response => {
      dispatch(setUser(null));
      dispatch(setMessage(response.data.info));
      dispatch(setAppStatus('succeeded'));
    })
    .catch(e => {
      const error = e.response
        ? e.response.data.error
        : `${e.message}, more details in the console`;
      dispatch(setError(error));
      dispatch(setAppStatus('failed'));
    });
};
