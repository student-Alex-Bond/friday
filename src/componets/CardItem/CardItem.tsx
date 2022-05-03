import React, { FC } from 'react';

import { useSelector } from 'react-redux';

import { MyBackdrop } from '../../common/BackDrop';
import { MyRating } from '../../common/Rating/MyRating';
import { RootState } from '../../store';
import { CardType } from '../PacksList/PackItem/pack-item-reducer';
import { selectedStatusApp } from '../PacksList/selectors';

import classes from './CardItem.module.css';

type CardItemType = {
  card: CardType;
};
const CardItem: FC<CardItemType> = ({ card }) => {
  const status = useSelector<RootState, string>(selectedStatusApp);
  const updated = new Date(card.updated).toLocaleDateString();
  return (
    <>
      {status === 'loading' && <MyBackdrop />}
      <div className={classes.item}>
        <div>{card.question}</div>
        <div>{card.answer}</div>
        <div>{updated}</div>
        <div>
          <MyRating value={Math.ceil(card.grade)} />
        </div>
      </div>
    </>
  );
};
export { CardItem };
