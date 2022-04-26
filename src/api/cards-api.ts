import axios from 'axios';

import { LoginUserType } from '../componets/Login/actions';

import { NewUserType, UpdateUserType } from './types';

const instance = axios.create({
  baseURL: 'http://localhost:7542/2.0/' || process.env.REACT_APP_BACK_URL,
  withCredentials: true,
});

export const authApi = {
  me() {
    return instance.post('/auth/me', {});
  },
  register(newUser: NewUserType) {
    return instance.post('/auth/register', newUser);
  },
  login(user: LoginUserType) {
    return instance.post('/auth/login', user);
  },
  logout() {
    return instance.delete('/auth/me', {});
  },
  updateUser(data: UpdateUserType) {
    return instance.put('/auth/me', data);
  },
};

export const cardsApi = {
  getCards() {
    return instance.get('/cards/pack');
  },
};
