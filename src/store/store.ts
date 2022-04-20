import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import { loginReducer } from '../componets/Login/loginReducer';

import { passwordReducer } from './passwordReducer';

import { appReducer } from 'componets/App/app-reducer';
import { profileReducer } from 'componets/Profile/profile-reducer';

export const rootReducer = combineReducers({
  login: loginReducer,
  password: passwordReducer,
  app: appReducer,
  profile: profileReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;
