import { Dispatch } from 'react';

import { cardsApi } from '../../api/cards-api';
import { setMessage, SetMessageType } from '../App/app-reducer';

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

export const initialState = {
  cardsPacks: [],
};

export const GET_PACKS = 'packs/GET-PACKS';

export type InitialStateType = { cardsPacks: CardsPackType[] };
export type GetPacksType = ReturnType<typeof getPacks>;
export type ActionsType = GetPacksType | SetMessageType;

export const packsReducer = (
  state: InitialStateType = initialState,
  action: ActionsType,
): InitialStateType => {
  switch (action.type) {
    case GET_PACKS:
      return { ...state, cardsPacks: action.payload.packs };
    default:
      return state;
  }
};
export const getPacks = (packs: any) =>
  ({ type: GET_PACKS, payload: { packs } } as const);

export const getPacksTC = () => (dispatch: Dispatch<ActionsType>) => {
  cardsApi.getCards().then(response => {
    dispatch(getPacks(response.data.cardPacks));
    dispatch(setMessage(response.statusText));
  });
};
