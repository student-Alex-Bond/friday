import { isInitializedType, SetErrorType } from '../../App/app-reducer';
import { setMessage, setUser } from '../actions/actions';

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
  message: null | string;
};

type SetUserType = ReturnType<typeof setUser>;
type SetMessageType = ReturnType<typeof setMessage>;

export type ActionsType = SetUserType | isInitializedType | SetMessageType | SetErrorType;
