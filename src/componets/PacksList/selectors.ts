import { RootState } from '../../store';
import { RequestStatusType } from '../App/app-reducer';

import { CardsPackType } from './packsReducer';

export const selectedStatusApp = (state: RootState): RequestStatusType =>
  state.app.status;
export const selectedCardsPacks = (state: RootState): CardsPackType[] =>
  state.cardsPacks.cardsPacks;
export const selectedPageCount = (state: RootState): number =>
  state.cardsPacks.queryParams.pageCount;
export const selectedCurrentPage = (state: RootState): number =>
  state.cardsPacks.queryParams.currentPage;
export const selectedPackName = (state: RootState): string =>
  state.cardsPacks.queryParams.packName;
export const selectedId = (state: RootState): string | undefined =>
  state.cardsPacks.queryParams.haveID;
export const selectedCardsCountTotalCount = (state: RootState): number =>
  state.cardsPacks.cardPacksTotalCount;
export const selectedValueSearchInput = (state: RootState): string =>
  state.cardsPacks.queryParams.packName;
export const selectedSortPack = (state: RootState): string =>
  state.cardsPacks.queryParams.sortPacks;
