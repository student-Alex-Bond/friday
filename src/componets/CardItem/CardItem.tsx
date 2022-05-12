import React, { FC, memo, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { MyBackdrop } from '../../common/BackDrop';
import { ModalWindow } from '../../common/ModalWindow';
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
  const deleteCurrentCard = (): void => {
    // eslint-disable-next-line no-underscore-dangle
    dispatch(deleteCard(card._id));
  };
  const [isShow, setIsShow] = useState<boolean>(false);
  return (
    <>
      <ModalWindow
        isView={isShow}
        title="Delete Card"
        clickActionCallback={deleteCurrentCard}
        nameButton="Delete"
        closeWindow={() => setIsShow(false)}
      >
        <span className={classes.text}>
          Do you really want to remove card{' '}
          <strong style={{ textTransform: 'uppercase' }}>{card.question}</strong>? All
          cards will be excluded from this course.
        </span>
      </ModalWindow>
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
              onClick={() => setIsShow(true)}
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
