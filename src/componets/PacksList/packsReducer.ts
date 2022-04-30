import { Dispatch } from 'react';

import { cardsApi } from '../../api/cards-api';
import { RootState } from '../../store/store';
import {
  setAppStatus,
  SetAppStatusType,
  setError,
  SetErrorType,
  setMessage,
  SetMessageType,
} from '../App/app-reducer';

export type CardsPackType = {
  cardsCount: number;
  created: string;
  grade: number;
  more_id: string;
  name: string;
  path: string;
  private: boolean;
  rating: number;
  shots: number;
  type: string;
  updated: string;
  user_id: string;
  user_name: string;
};

export type queryParamsType = {
  minMaxContCards: number[];
  currentPage: number;
  pageCount: number;
  haveID: string | undefined;
  packName: string;
};

const firstNumber = 1;
const lastNumber = 12;
export const initialState = {
  cardsPacks: [],
  queryParams: {
    minMaxContCards: [firstNumber, lastNumber],
    currentPage: 1,
    pageCount: 5,
    haveID: undefined,
    packName: '',
  },
  cardPacksTotalCount: 0,
};

export const GET_PACKS = 'packs/GET-PACKS';
export const SET_MIN_MAX_COUNT_CARDS = 'packs/SET-MIN-MAX-COUNT-CARDS';
export const SET_PAGE_COUNT = 'packs/SET-PAGE-COUNT';
export const SET_CURRENT_PAGE = 'packs/SET-CURRENT-PAGE';
export const SET_MY_ID = 'packs/SET-MY-ID';
export const SET_SEARCH_INPUT = 'packs/SET-SEARCH-INPUT';
export const SET_TOTAL_COUNT = 'packs/SET-TOTAL-COUNT';

export type InitialStateType = {
  cardsPacks: CardsPackType[];
  queryParams: queryParamsType;
  cardPacksTotalCount: number;
};
export type GetPacksType = ReturnType<typeof getPacks>;
export type SetMinMaxContCardsType = ReturnType<typeof setMinMaxContCards>;
export type SetPageCountType = ReturnType<typeof setPageCount>;
export type setCurrentPageType = ReturnType<typeof setCurrentPage>;
export type SetMyIdType = ReturnType<typeof setMyId>;
export type SetSearchValueType = ReturnType<typeof setSearchValue>;
export type SetCardPacksTotalCountType = ReturnType<typeof setCardPacksTotalCount>;
export type ActionsType =
  | GetPacksType
  | SetMessageType
  | SetMinMaxContCardsType
  | SetPageCountType
  | setCurrentPageType
  | SetMyIdType
  | SetSearchValueType
  | SetErrorType
  | SetAppStatusType
  | SetCardPacksTotalCountType;

export const packsReducer = (
  state: InitialStateType = initialState,
  action: ActionsType,
): InitialStateType => {
  switch (action.type) {
    case SET_MIN_MAX_COUNT_CARDS:
      return {
        ...state,
        queryParams: { ...state.queryParams, minMaxContCards: action.payload.values },
      };
    case SET_PAGE_COUNT:
      return {
        ...state,
        queryParams: { ...state.queryParams, pageCount: action.payload.pageCount },
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        queryParams: { ...state.queryParams, currentPage: action.payload.currentPage },
      };
    case GET_PACKS:
      return { ...state, cardsPacks: action.payload.packs };
    case SET_MY_ID:
      return {
        ...state,
        queryParams: { ...state.queryParams, haveID: action.payload.myID },
      };
    case SET_SEARCH_INPUT:
      return {
        ...state,
        queryParams: { ...state.queryParams, packName: action.payload.packName },
      };
    case SET_TOTAL_COUNT:
      return { ...state, cardPacksTotalCount: action.payload.totalCount };
    default:
      return state;
  }
};
export const getPacks = (packs: any) =>
  ({ type: GET_PACKS, payload: { packs } } as const);

export const setMinMaxContCards = (values: number[]) =>
  ({ type: SET_MIN_MAX_COUNT_CARDS, payload: { values } } as const);

export const setPageCount = (pageCount: number) =>
  ({
    type: SET_PAGE_COUNT,
    payload: { pageCount },
  } as const);

export const setCurrentPage = (currentPage: number) =>
  ({ type: SET_CURRENT_PAGE, payload: { currentPage } } as const);

export const setMyId = (myID: string | undefined) =>
  ({ type: SET_MY_ID, payload: { myID } } as const);

export const setSearchValue = (packName: string) =>
  ({ type: SET_SEARCH_INPUT, payload: { packName } } as const);
export const setCardPacksTotalCount = (totalCount: number) =>
  ({ type: SET_TOTAL_COUNT, payload: { totalCount } } as const);

export const getPacksTC =
  () => (dispatch: Dispatch<ActionsType>, getState: () => RootState) => {
    dispatch(setAppStatus('loading'));
    cardsApi
      .getCards(getState().cardsPacks.queryParams)
      .then(response => {
        dispatch(getPacks(response.data.cardPacks));
        dispatch(setCardPacksTotalCount(response.data.cardPacksTotalCount));
        dispatch(setMessage(response.statusText));
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
