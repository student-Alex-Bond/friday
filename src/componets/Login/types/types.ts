import { setError, setUser } from '../actions/actions';

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
  errorMessage: string | null;
};

type SetUserType = ReturnType<typeof setUser>;
type SetErrorType = ReturnType<typeof setError>;

export type ActionsType = SetUserType | SetErrorType;
