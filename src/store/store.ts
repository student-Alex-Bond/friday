import {applyMiddleware, combineReducers, createStore} from 'redux'
import { loginReducer } from './loginReducer'
import thunk from 'redux-thunk'
import {passwordReducer} from "./passwordReducer";

export const rootReducer = combineReducers({
    login: loginReducer,
    password: passwordReducer
})

export const store  = createStore(rootReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof rootReducer>