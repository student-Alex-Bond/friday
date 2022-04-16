import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import { loginReducer } from './loginReducer';
import { passwordReducer } from './passwordReducer';

export const rootReducer = combineReducers({
  login: loginReducer,
  password: passwordReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;
