import React, { FC, memo, useEffect, useMemo } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { MyBackdrop } from '../../../common/BackDrop';
import { InputSearch } from '../../../common/InputSearch';
import { MainContainer } from '../../../common/MainContainer';
import { SortedButton } from '../../../common/SortedButton';
import { selectedStatusApp } from '../selectors';

import {
  CardType,
  getCards,
  setSortCards,
  setValueSearchAnswer,
  setValueSearchQuestion,
} from './pack-item-reducer';
import classes from './PackItem.module.css';
import { selectedCards, selectedPackName } from './selectors';

import { CardItem } from 'componets/CardItem';
import { RootState } from 'store';

const PackItems: FC = memo(() => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const status = useSelector<RootState, string>(selectedStatusApp);
  const packName = useSelector<RootState, string>(selectedPackName);
  const cards = useSelector<RootState, CardType[]>(selectedCards);
  const sortCards = useSelector<RootState, string>(state => state.cards.sortCards);
  const cardsPackID = useSelector<RootState, string>(state => state.cards.cardsPack_id);
  const valueSearchQuestion = useSelector<RootState, string>(
    state => state.cards.valueSearchQuestion,
  );
  const valueSearchAnswer = useSelector<RootState, string>(
    state => state.cards.valueSearchAnswer,
  );
  const changeMethodSort = (methodSort: string): void => {
    dispatch(setSortCards(`${methodSort}grade`));
  };
  useEffect(() => {
    dispatch(getCards());
  }, [packName, valueSearchAnswer, valueSearchQuestion, sortCards]);
  if (cardsPackID === '') {
    navigate('/packs-list');
  }
  const goBack = (): void => {
    const onePageBack = -1;
    if (status === 'loading') {
      return;
    }
    navigate(onePageBack);
    dispatch(setValueSearchQuestion(''));
    dispatch(setValueSearchAnswer(''));
  };
  const searchValueQuestion = useMemo(
    () =>
      (value: string): void => {
        dispatch(setValueSearchQuestion(value));
      },
    [valueSearchQuestion],
  );

  const searchValueAnswer = useMemo(
    () =>
      (value: string): void => {
        dispatch(setValueSearchAnswer(value));
      },
    [valueSearchAnswer],
  );

  useEffect(() => {
    searchValueAnswer(valueSearchAnswer);
    searchValueQuestion(valueSearchQuestion);
  }, [valueSearchAnswer, valueSearchQuestion]);
  return (
    // const navigate = useNavigate();
    // const createdDate = new Date(cards.created).toLocaleDateString();
    <MainContainer>
      {status === 'loading' && <MyBackdrop />}
      <div style={{ width: '100%', padding: '30px' }}>
        <div className={classes.link}>
          <button type="button" className={classes.btn} onClick={goBack}>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAAkklEQVRoge3YQQrCUAwA0eHrPb2Z6MpTim4aK2LhK2ISmAfZT1oKJSBJkh7GMi0N4ARcgH1yy8ci/rZMqyUGcGaNjzlmRs16ffIxV+CQ2DXF+CzGZzE+i/FZtuKzpnX85gJtf31nVHsLP12ixUccXKIKl6jCJapwiSpan1XCu8PWLrXoC8+nxXbxofVxV5Kkv7sDs0bnxnY9iNYAAAAASUVORK5CYII="
              alt="arrow back"
            />
          </button>
          <span className={classes.title}>{packName}</span>
        </div>
        <div className={classes.search}>
          <InputSearch
            initialValue={valueSearchQuestion}
            getValueSearchInput={searchValueQuestion}
            placeholder="search question"
          />
          <InputSearch
            initialValue={valueSearchAnswer}
            getValueSearchInput={searchValueAnswer}
            placeholder="search answer"
          />
        </div>
        <div className={classes.tableHeader}>
          <div>Question</div>
          <div>Answer</div>
          <div>Lasted Update</div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            Grade
            <SortedButton sortedPacks={sortCards} changeMethodSort={changeMethodSort} />
          </div>
        </div>
        <div style={{ overflow: 'auto' }}>
          {cards.map(card => (
            <CardItem key={card.created} card={card} />
          ))}
        </div>
      </div>
    </MainContainer>
  );
});

export { PackItems };
