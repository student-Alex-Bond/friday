import React, { FC, memo, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { MyBackdrop } from '../../common/BackDrop';
import { Button } from '../../common/Button';
import { RootState } from '../../store';
import { getCard } from '../../utils/helper';
import { CardType, getCards } from '../PacksList/PackItem/pack-item-reducer';
import { selectedStatusApp } from '../PacksList/selectors';

import classes from './LearnPage.module.css';

import { ButtonCancel } from 'common/ButtonCancel';

const grades = ['не знал', 'забыл', 'долго думал', 'перепутал', 'знал'];

const LearnPage: FC = memo(() => {
  const dispatch = useDispatch();
  const status = useSelector<RootState, string>(selectedStatusApp);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const packName = useSelector<RootState, string>(state => state.cards.packName);
  const cards = useSelector<RootState, CardType[]>(state => state.cards.cards);
  const [card, setCard] = useState<CardType | null>(null);
  useEffect(() => {
    dispatch(getCards());
  }, []);
  const zero = 0;
  useEffect(() => {
    if (cards.length !== zero) {
      setCard(getCard(cards));
    }
  }, [cards]);

  if (card === null) {
    return <div>{null}</div>;
  }

  const onNext = (): void => {
    setIsChecked(false);
    setCard(getCard(cards));
  };
  return (
    <div className={classes.container}>
      {status === 'loading' && <MyBackdrop />}
      <h1 className={classes.title}>Learn &quot;{packName}&quot;</h1>
      <span className={classes.question}>
        <strong>Question:</strong> {card.question}?
      </span>
      {isChecked && (
        <>
          <span className={classes.question}>
            <strong>Answer:</strong> {card.answer}?
          </span>
          <span className={classes.rate}>Rate yourself:</span>
          <div className={classes.grade}>
            {grades.map((grade, index) => (
              <>
                <input
                  className={classes.customRadio}
                  value={index}
                  id={`variant${index}`}
                  type="radio"
                  name="variants"
                />
                <label
                  className={classes.labelTitle}
                  /* eslint-disable-next-line react/no-array-index-key */
                  key={`variant${index}`}
                  htmlFor={`variant${index}`}
                >
                  {grade}
                </label>
              </>
            ))}
          </div>
        </>
      )}
      <div className={classes.btn}>
        <ButtonCancel>Cancel</ButtonCancel>
        {!isChecked ? (
          <Button type="button" onClick={() => setIsChecked(true)}>
            Show Answer
          </Button>
        ) : (
          <Button type="button" onClick={onNext}>
            Next
          </Button>
        )}
      </div>
    </div>
  );
});

export { LearnPage };
