import axios from 'axios';

import { LoginUserType } from '../componets/Login/actions';

import { newUserType } from './types';

const instance = axios.create({
  baseURL: 'http://localhost:7542/2.0/' || process.env.REACT_APP_BACK_URL,
  withCredentials: true,
});

export const authApi = {
  me() {
    return instance.post('/auth/me', {});
  },
  register(newUser: newUserType) {
    return instance.post('/auth/register', newUser);
  },
  login(user: LoginUserType) {
    return instance.post('/auth/login', user);
  },
  logout() {
    return instance.delete('/auth/me', {});
  },
};
