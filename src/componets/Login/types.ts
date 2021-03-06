import {
  isInitializedType,
  SetAppStatusType,
  SetErrorType,
  SetMessageType,
} from '../App/app-reducer';

import { changePersonalInfo, setUser } from './actions';

export type UserType = {
  _id: string;
  email: string;
  name: string;
  avatar?: string;
  publicCardPacksCount: number; // количество колод

  created: Date;
  updated: Date;
  isAdmin: boolean;
  verified: boolean; // подтвердил ли почту
  rememberMe: boolean;

  error?: string;
};

export type InitialStateType = {
  user: UserType | null;
};

type SetUserType = ReturnType<typeof setUser>;
type ChangeUserName = ReturnType<typeof changePersonalInfo>;

export type ActionsType =
  | SetUserType
  | isInitializedType
  | SetMessageType
  | SetErrorType
  | SetAppStatusType
  | ChangeUserName;
