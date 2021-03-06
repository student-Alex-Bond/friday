import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { loginReducer } from '../componets/Login/loginReducer';
import { cardReducer } from '../componets/PacksList/AddOrEditCard/card-reducer';
import { packItemReducer } from '../componets/PacksList/PackItem/pack-item-reducer';
import { packsReducer } from '../componets/PacksList/packsReducer';

import { passwordReducer } from './passwordReducer';

import { appReducer } from 'componets/App/app-reducer';
import { profileReducer } from 'componets/Profile/profile-reducer';
import { registerReducer } from 'componets/Registration/registerReducer';

export const rootReducer = combineReducers({
  login: loginReducer,
  password: passwordReducer,
  app: appReducer,
  profile: profileReducer,
  register: registerReducer,
  cardsPacks: packsReducer,
  cards: packItemReducer,
  card: cardReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export type RootState = ReturnType<typeof rootReducer>;
