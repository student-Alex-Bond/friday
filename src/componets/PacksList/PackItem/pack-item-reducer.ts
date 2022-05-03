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
};
export type ActionType =
  | SetPackNameType
  | SetPackNameIDType
  | SetAppStatusType
  | SetErrorType
  | SetCardsType;

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
};

const SET_PACK_NAME = 'cards/SET-PACK-NAME';
const SET_PAK_NAME_ID = 'cards/SET-PACK-NAME-ID';
const SET_CARDS = 'cards/SET-CARDS';

export type SetPackNameType = ReturnType<typeof setPackName>;
export type SetPackNameIDType = ReturnType<typeof setPackNameID>;
export type SetCardsType = ReturnType<typeof setCards>;

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
