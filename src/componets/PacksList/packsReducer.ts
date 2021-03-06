import { Dispatch } from 'react';

import { ThunkDispatch } from 'redux-thunk';

import { packsApi } from '../../api/packs-api';
import { RootState } from '../../store';
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
  deckCover: null;
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
  __v: number;
  _id: string;
};

export type deletePackType = { name: string; id: string };
export type queryParamsType = {
  minMaxContCards: number[];
  currentPage: number;
  pageCount: number;
  haveID: string | undefined;
  packName: string;
  sortPacks: string;
};

const firstNumber = 0;
const lastNumber = 12;
export const initialState = {
  cardsPacks: [],
  queryParams: {
    minMaxContCards: [firstNumber, lastNumber],
    currentPage: 1,
    pageCount: 5,
    haveID: undefined,
    packName: '',
    sortPacks: '0updated',
  },
  cardPacksTotalCount: 0,
  deletePack: {} as deletePackType,
};

export const GET_PACKS = 'packs/GET-PACKS';
export const SET_MIN_MAX_COUNT_CARDS = 'packs/SET-MIN-MAX-COUNT-CARDS';
export const SET_PAGE_COUNT = 'packs/SET-PAGE-COUNT';
export const SET_CURRENT_PAGE = 'packs/SET-CURRENT-PAGE';
export const SET_MY_ID = 'packs/SET-MY-ID';
export const SET_SEARCH_INPUT = 'packs/SET-SEARCH-INPUT';
export const SET_TOTAL_COUNT = 'packs/SET-TOTAL-COUNT';
export const SET_SORT_PACKS = 'packs/SET-SORT-PACKS';
export const SET_PARAMS_DELETE_PACK = 'packs/SET-PARAMS-DELETE-PACK';

export type InitialStateType = {
  cardsPacks: CardsPackType[];
  queryParams: queryParamsType;
  cardPacksTotalCount: number;
  deletePack: deletePackType;
};
export type GetPacksType = ReturnType<typeof getPacks>;
export type SetMinMaxContCardsType = ReturnType<typeof setMinMaxContCards>;
export type SetPageCountType = ReturnType<typeof setPageCount>;
export type setCurrentPageType = ReturnType<typeof setCurrentPage>;
export type SetMyIdType = ReturnType<typeof setMyId>;
export type SetSearchValueType = ReturnType<typeof setSearchValue>;
export type SetCardPacksTotalCountType = ReturnType<typeof setCardPacksTotalCount>;
export type SetSortPacksType = ReturnType<typeof setSortPacks>;
export type SetParamsDeletePackType = ReturnType<typeof setParamsDeletePack>;
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
  | SetCardPacksTotalCountType
  | SetSortPacksType
  | SetParamsDeletePackType;

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
    case GET_PACKS: {
      return { ...state, cardsPacks: action.payload.packs };
    }

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
    case SET_SORT_PACKS:
      return {
        ...state,
        queryParams: { ...state.queryParams, sortPacks: action.payload.sort },
      };
    case SET_PARAMS_DELETE_PACK:
      return { ...state, deletePack: action.payload.params };
    default:
      return state;
  }
};
export const getPacks = (packs: CardsPackType[]) =>
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
export const setSortPacks = (sort: string) =>
  ({ type: SET_SORT_PACKS, payload: { sort } } as const);
export const setParamsDeletePack = (params: deletePackType) =>
  ({ type: SET_PARAMS_DELETE_PACK, payload: { params } } as const);

export const getPacksTC =
  () => (dispatch: Dispatch<ActionsType>, getState: () => RootState) => {
    dispatch(setAppStatus('loading'));
    packsApi
      .getPacks(getState().cardsPacks.queryParams)
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

export const deleteCardPack =
  (id: string) => (dispatch: ThunkDispatch<RootState, void, ActionsType>) => {
    dispatch(setAppStatus('loading'));
    packsApi
      .deletePack(id)
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
        dispatch(getPacksTC());
        dispatch(setAppStatus('succeeded'));
      });
  };
