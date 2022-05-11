import React, { FC, memo } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { MyBackdrop } from '../../common/BackDrop';
import { MyRating } from '../../common/Rating/MyRating';
import { RootState } from '../../store';
import { deleteCard } from '../PacksList/AddNewCard/card-reducer';
import { CardType } from '../PacksList/PackItem/pack-item-reducer';
import { selectedStatusApp } from '../PacksList/selectors';

import classes from './CardItem.module.css';

type CardItemType = {
  card: CardType;
};
const CardItem: FC<CardItemType> = memo(({ card }) => {
  const dispatch = useDispatch();
  const status = useSelector<RootState, string>(selectedStatusApp);
  const updated = new Date(card.updated).toLocaleDateString();
  // eslint-disable-next-line no-underscore-dangle
  const myID = useSelector<RootState, string | undefined>(state => state.login.user?._id);
  const deleteCurrentCard = (id: string): void => {
    dispatch(deleteCard(id));
  };
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
        {myID === card.user_id ? (
          <div>
            <button
              /* eslint-disable-next-line no-underscore-dangle */
              onClick={() => deleteCurrentCard(card._id)}
              className={classes.btn}
              type="button"
            >
              Delete
            </button>
            <button className={classes.btn} type="button">
              Edit
            </button>
          </div>
        ) : null}
      </div>
    </>
  );
});
export { CardItem };
