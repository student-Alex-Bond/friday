import { RootState } from '../../../store';

import { CardType } from './pack-item-reducer';

export const selectedPackName = (state: RootState): string => state.cards.packName;
export const selectedCards = (state: RootState): CardType[] => state.cards.cards;
