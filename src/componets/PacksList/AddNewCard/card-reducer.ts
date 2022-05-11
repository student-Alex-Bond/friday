import { ThunkDispatch } from 'redux-thunk';

import { cardsApi } from '../../../api/packs-api';
import { RootState } from '../../../store';
import {
  setAppStatus,
  SetAppStatusType,
  setError,
  SetErrorType,
  SetMessageType,
} from '../../App/app-reducer';
import { getCards } from '../PackItem/pack-item-reducer';

const initialState = {
  cardsPack_id: '',
  question: '',
  answer: '',
};

export type InitialStateType = {
  cardsPack_id: string;
  question: string;
  answer: string;
};

export const SET_CARDS_PACK_ID = 'card/SET-CARDS-PACK-ID';
export const SET_QUESTION = 'card/SET-QUESTION';
export const SET_ANSWER = 'card/SET-ANSWER';
export type SetCardsPackIDType = ReturnType<typeof setCardsPackID>;
export type SetQuestionType = ReturnType<typeof setQuestion>;
export type SetAnswerType = ReturnType<typeof setAnswer>;
export type ActionType =
  | SetCardsPackIDType
  | SetQuestionType
  | SetAnswerType
  | SetMessageType
  | SetErrorType
  | SetAppStatusType;
export const cardReducer = (
  state: InitialStateType = initialState,
  action: ActionType,
): InitialStateType => {
  switch (action.type) {
    case SET_CARDS_PACK_ID:
      return { ...state, cardsPack_id: action.payload.id };
    case SET_QUESTION:
      return { ...state, question: action.payload.question };
    case SET_ANSWER:
      return { ...state, answer: action.payload.answer };
    default:
      return state;
  }
};

export const setCardsPackID = (id: string) =>
  ({ type: SET_CARDS_PACK_ID, payload: { id } } as const);
export const setQuestion = (question: string) =>
  ({ type: SET_QUESTION, payload: { question } } as const);
export const setAnswer = (answer: string) =>
  ({ type: SET_ANSWER, payload: { answer } } as const);

export const addedNewCard =
  () =>
  (dispatch: ThunkDispatch<RootState, void, ActionType>, getState: () => RootState) => {
    dispatch(setAppStatus('loading'));
    cardsApi
      .createNewCard(getState().card)
      .then(() => {
        dispatch(setAppStatus('succeeded'));
      })
      .catch(e => {
        const error = e.response
          ? e.response.data.error
          : `${e.message}, more details in the console`;
        dispatch(setError(error));
        dispatch(setAppStatus('failed'));
      });
  };

export const deleteCard =
  (id: string) => (dispatch: ThunkDispatch<RootState, void, ActionType>) => {
    dispatch(setAppStatus('loading'));
    cardsApi
      .deleteCard(id)
      .then(() => {
        dispatch(setAppStatus('succeeded'));
      })
      .catch(e => {
        const error = e.response
          ? e.response.data.error
          : `${e.message}, more details in the console`;
        dispatch(setError(error));
        dispatch(setAppStatus('failed'));
      })
      .then(() => {
        dispatch(getCards());
      });
  };
