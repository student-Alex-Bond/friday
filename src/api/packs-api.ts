import axios from 'axios';

import { LoginUserType } from '../componets/Login/actions';
import { InitialStateType } from '../componets/PacksList/PackItem/pack-item-reducer';
import { queryParamsType } from '../componets/PacksList/packsReducer';

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

export const packsApi = {
  getPacks(queryParams: queryParamsType) {
    const firstElementInArray = 0;
    const lastElementInArray = 1;
    const stringRequest = `/cards/pack?sortPacks=${queryParams.sortPacks}&user_id=${
      queryParams.haveID === undefined ? '' : queryParams.haveID
    }&packName=${queryParams.packName}&min=${
      queryParams.minMaxContCards[firstElementInArray]
    }&max=${queryParams.minMaxContCards[lastElementInArray]}&page=${
      queryParams.currentPage
    }&pageCount=${queryParams.pageCount}`;
    return instance.get(stringRequest);
  },
};

export const cardsApi = {
  getCard(state: InitialStateType) {
    const config = { cardsPack_id: state.cardsPack_id };
    return instance.get('/cards/card', { params: config });
  },
};
