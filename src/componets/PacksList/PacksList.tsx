import React, { FC, memo, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { RootState } from '../../store';
import { RequestStatusType } from '../App/app-reducer';
import { selectUser } from '../Login/selectors';
import { UserType } from '../Login/types';

import classes from './PacksList.module.css';
import { CardsPackType, getPacksTC, setSearchValue } from './packsReducer';
import {
  selectedCardsCountTotalCount,
  selectedCardsPacks,
  selectedCurrentPage,
  selectedId,
  selectedPackName,
  selectedPageCount,
  selectedSortPack,
  selectedStatusApp,
  selectedValueSearchInput,
} from './selectors';

import { MyBackdrop } from 'common/BackDrop/Backdrop';
import { Button } from 'common/Button';
import { InputSearch } from 'common/InputSearch';
import { LeftContainer } from 'common/LeftContainer';
import { MainContainer } from 'common/MainContainer';
import { Pagination } from 'common/Pagination';
import { RangeSlider } from 'common/RangeSlider';
import { Select } from 'common/Select';
import { Table } from 'common/Table';
import { PrivateOrPublicPacks } from 'componets/PacksList/PrivateOrPublicPacks';

const PacksList: FC = memo(() => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector<RootState, UserType | null>(selectUser);
  const status = useSelector<RootState, RequestStatusType>(selectedStatusApp);
  const pageCount = useSelector<RootState, number>(selectedPageCount);
  const cardsPacks = useSelector<RootState, CardsPackType[]>(selectedCardsPacks);
  const currentPage = useSelector<RootState, number>(selectedCurrentPage);
  const packName = useSelector<RootState, string>(selectedPackName);
  const haveId = useSelector<RootState, string | undefined>(selectedId);
  const cardsCountTotalCount = useSelector<RootState, number>(
    selectedCardsCountTotalCount,
  );
  const valueSearchInput = useSelector<RootState, string>(selectedValueSearchInput);
  const sortPack = useSelector<RootState, string>(selectedSortPack);
  const searchPackName = (value: string): void => {
    dispatch(setSearchValue(value));
  };
  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user]);
  useEffect(() => {
    searchPackName(valueSearchInput);
  }, [valueSearchInput]);
  useEffect(() => {
    console.log('render useEffect');
    dispatch(getPacksTC());
  }, [pageCount, currentPage, packName, haveId, sortPack]);
  console.log('render');
  return (
    <MainContainer>
      <LeftContainer>
        <h2 className={classes.title}>Show packs cards</h2>
        <PrivateOrPublicPacks />
        <span className={classes.text}>Number of cards</span>
        <div className={classes.range}>
          <RangeSlider />
        </div>
      </LeftContainer>
      <div className={classes.packsListContainer}>
        <div>{status === 'loading' && <MyBackdrop />}</div>
        <h2 className={classes.title}>Packs list</h2>
        <div className={classes.blockSearch}>
          <div className={classes.search}>
            <InputSearch
              placeholder="Search ... "
              getValueSearchInput={searchPackName}
              initialValue={valueSearchInput}
            />
          </div>
          <div className={classes.btnAdd}>
            <Button color="#21268F" type={undefined}>
              Add new pack
            </Button>
          </div>
        </div>
        <div className={classes.notFound}>
          {haveId !== undefined && <div>You don&#39;t have decks</div>}
        </div>
        <Table cardsPacks={cardsPacks} />
        <div className={classes.countPage}>
          <Pagination currentPage={currentPage} totalCount={cardsCountTotalCount} />
          <span>Show</span>
          <Select page={String(pageCount)} />
          <span>Card per Page</span>
        </div>
      </div>
    </MainContainer>
  );
});
export { PacksList };
