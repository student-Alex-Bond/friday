import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:7542/2.0/' || process.env.REACT_APP_BACK_URL,
  withCredentials: true,
});

export const authApi = {
  me() {
    return instance.post('/auth/me', {});
  },
};
