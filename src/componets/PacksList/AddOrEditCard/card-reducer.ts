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
  mode: 'added' as modeType,
  cardId: '',
};

export type modeType = 'added' | 'edit';

export type InitialStateType = {
  cardsPack_id: string;
  question: string;
  answer: string;
  mode: modeType;
  cardId: string;
};

export const SET_CARDS_PACK_ID = 'card/SET-CARDS-PACK-ID';
export const SET_QUESTION = 'card/SET-QUESTION';
export const SET_ANSWER = 'card/SET-ANSWER';
export const SET_MODE = 'card/SET-MODE';
export const SET_CARD_ID = 'card/SET-CARD-ID';
export type SetCardsPackIDType = ReturnType<typeof setCardsPackID>;
export type SetQuestionType = ReturnType<typeof setQuestion>;
export type SetAnswerType = ReturnType<typeof setAnswer>;
export type SetModeType = ReturnType<typeof setMode>;
export type SetCardIDType = ReturnType<typeof setCardID>;
export type ActionType =
  | SetCardsPackIDType
  | SetQuestionType
  | SetAnswerType
  | SetMessageType
  | SetErrorType
  | SetAppStatusType
  | SetModeType
  | SetCardIDType;
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
    case SET_MODE:
      return { ...state, mode: action.payload.mode };
    case SET_CARD_ID:
      return { ...state, cardId: action.payload.id };
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
export const setMode = (mode: 'added' | 'edit') =>
  ({ type: SET_MODE, payload: { mode } } as const);
export const setCardID = (id: string) =>
  ({ type: SET_CARD_ID, payload: { id } } as const);

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

export const updateCard =
  () =>
  (dispatch: ThunkDispatch<RootState, void, ActionType>, getState: () => RootState) => {
    dispatch(setAppStatus('loading'));
    cardsApi
      .updateCard(getState().card)
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
