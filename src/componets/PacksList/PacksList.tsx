import React, { FC, memo, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { InputSearch } from '../../common/InputSearch/InputSearch';
import LeftContainer from '../../common/LeftContainer/LeftContainer';
import { MainContainer } from '../../common/MainContainer/MainContainer';
import { Pagination } from '../../common/Pagination/Pagination';
import { RangeSlider } from '../../common/RangeSlider/RangeSlider';
import { Select } from '../../common/Select/Select';
import { Table } from '../../common/Table/Table';
import { RootState } from '../../store/store';

import classes from './PacksList.module.css';
import { CardsPackType, getPacksTC, setSearchValue } from './packsReducer';
import { PrivateOrPublicPacks } from './PrivateOrPublicPacks/PrivateOrPublicPacks';

import { MyBackdrop } from 'common/BackDrop/Backdrop';
import { Button } from 'common/Button';

const PacksList: FC = memo(() => {
  const dispatch = useDispatch();
  const status = useSelector<RootState>(state => state.app.status);
  const pageCount = useSelector<RootState, number>(
    state => state.cardsPacks.queryParams.pageCount,
  );
  const cardsPacks = useSelector<RootState, CardsPackType[]>(
    state => state.cardsPacks.cardsPacks,
  );
  const currentPage = useSelector<RootState, number>(
    state => state.cardsPacks.queryParams.currentPage,
  );
  const packName = useSelector<RootState, string>(
    state => state.cardsPacks.queryParams.packName,
  );
  const haveId = useSelector<RootState, string | undefined>(
    state => state.cardsPacks.queryParams.haveID,
  );
  const cardsCountTotalCount = useSelector<RootState, number>(
    state => state.cardsPacks.cardPacksTotalCount,
  );
  const valueSearchInput = useSelector<RootState, string>(
    state => state.cardsPacks.queryParams.packName,
  );
  const searchPackName = (value: string): void => {
    dispatch(setSearchValue(value));
  };
  const sortPack = useSelector<RootState, string>(
    state => state.cardsPacks.queryParams.sortPacks,
  );
  useEffect(() => {
    searchPackName(valueSearchInput);
  }, [valueSearchInput]);
  useEffect(() => {
    dispatch(getPacksTC());
  }, [pageCount, currentPage, packName, haveId, sortPack]);

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
export default PacksList;
