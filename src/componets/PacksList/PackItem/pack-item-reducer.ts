import { Dispatch } from 'react';

import { cardsApi } from '../../../api/packs-api';
import { RootState } from '../../../store';
import {
  setAppStatus,
  SetAppStatusType,
  setError,
  SetErrorType,
} from '../../App/app-reducer';

export type InitialStateType = {
  packName: string;
  cards: CardType[];
  cardsPack_id: string;
  packNameID: string;
  valueSearchQuestion: string;
  valueSearchAnswer: string;
  pageCountCards: number;
  sortCards: string;
  newNamePack: string;
};
export type ActionType =
  | SetPackNameType
  | SetPackNameIDType
  | SetAppStatusType
  | SetErrorType
  | SetCardsType
  | SetValueSearchQuestionType
  | SetValueSearchAnswerType
  | SetPageCountCardsType
  | SetSortCardsType
  | addedNewPackType;

export type CardType = {
  answer: string;
  answerImg: string;
  answerVideo: string;
  cardsPack_id: string;
  comments: string;
  created: string;
  grade: number;
  more_id: string;
  question: string;
  questionImg: string;
  questionVideo: string;
  rating: number;
  shots: number;
  type: string;
  updated: string;
  user_id: string;
};

const initialState = {
  packNameID: '',
  packName: '',
  cards: [],
  cardsPack_id: '',
  valueSearchQuestion: '',
  valueSearchAnswer: '',
  pageCountCards: 0,
  sortCards: '0grade',
  newNamePack: '',
};

const SET_PACK_NAME = 'cards/SET-PACK-NAME';
const SET_PAK_NAME_ID = 'cards/SET-PACK-NAME-ID';
const SET_CARDS = 'cards/SET-CARDS';
const SET_VALUE_SEARCH_QUESTION = 'cards/SET-VALUE-SEARCH-QUESTION';
const SET_VALUE_SEARCH_ANSWER = 'cards/SET-VALUE-SEARCH-ANSWER';
const SET_PAGE_COUNT_CARDS = 'cards/SET-PAGE-COUNT-CARDS';
const SET_METHOD_SORT = 'cards/SET-METHOD-SORT';
const NEW_PACK_NAME = 'cards/NEW-PACK-NAME';

export type SetPackNameType = ReturnType<typeof setPackName>;
export type SetPackNameIDType = ReturnType<typeof setPackNameID>;
export type SetCardsType = ReturnType<typeof setCards>;
export type SetValueSearchQuestionType = ReturnType<typeof setValueSearchQuestion>;
export type SetValueSearchAnswerType = ReturnType<typeof setValueSearchAnswer>;
export type SetPageCountCardsType = ReturnType<typeof setPageCountCards>;
export type SetSortCardsType = ReturnType<typeof setSortCards>;
export type addedNewPackType = ReturnType<typeof addedNewName>;

export const packItemReducer = (
  state: InitialStateType = initialState,
  action: ActionType,
): InitialStateType => {
  switch (action.type) {
    case SET_PACK_NAME:
      return { ...state, packName: action.payload.packName };
    case SET_PAK_NAME_ID:
      return { ...state, cardsPack_id: action.payload.id };
    case SET_CARDS:
      return { ...state, cards: action.payload.cards };
    case SET_VALUE_SEARCH_QUESTION:
      return { ...state, valueSearchQuestion: action.payload.value };
    case SET_VALUE_SEARCH_ANSWER:
      return { ...state, valueSearchAnswer: action.payload.value };
    case SET_PAGE_COUNT_CARDS:
      return { ...state, pageCountCards: action.payload.value };
    case SET_METHOD_SORT:
      return { ...state, sortCards: action.payload.methodSort };
    case NEW_PACK_NAME:
      return { ...state, newNamePack: action.payload.name };
    default:
      return state;
  }
};

export const setPackName = (packName: string) =>
  ({ type: SET_PACK_NAME, payload: { packName } } as const);
export const setPackNameID = (id: string) =>
  ({ type: SET_PAK_NAME_ID, payload: { id } } as const);
export const setCards = (cards: CardType[]) =>
  ({ type: SET_CARDS, payload: { cards } } as const);
export const setValueSearchQuestion = (value: string) =>
  ({ type: SET_VALUE_SEARCH_QUESTION, payload: { value } } as const);
export const setValueSearchAnswer = (value: string) =>
  ({ type: SET_VALUE_SEARCH_ANSWER, payload: { value } } as const);
export const setPageCountCards = (value: number) =>
  ({ type: SET_PAGE_COUNT_CARDS, payload: { value } } as const);
export const setSortCards = (methodSort: string) =>
  ({ type: SET_METHOD_SORT, payload: { methodSort } } as const);
export const addedNewName = (name: string) =>
  ({ type: NEW_PACK_NAME, payload: { name } } as const);
export const getCards =
  () => (dispatch: Dispatch<ActionType>, getState: () => RootState) => {
    dispatch(setAppStatus('loading'));
    cardsApi
      .getCard(getState().cards)
      .then(response => {
        dispatch(setCards(response.data.cards));
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
