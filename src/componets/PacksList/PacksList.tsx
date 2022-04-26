import React, { FC, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { InputSearch } from '../../common/InputSearch/InputSearch';
import LeftContainer from '../../common/LeftContainer/LeftContainer';
import { MainContainer } from '../../common/MainContainer/MainContainer';
import { RangeSlider } from '../../common/RangeSlider/RangeSlider';
import { RootState } from '../../store/store';

import { PackItem } from './PackItem/PackItem';
import classes from './PacksList.module.css';
import { CardsPackType, getPacksTC } from './packsReducer';

import { Button } from 'common/Button';

const PacksList: FC = () => {
  const dispatch = useDispatch();
  const cardsPacks = useSelector<RootState, CardsPackType[]>(
    state => state.cardsPacks.cardsPacks,
  );
  useEffect(() => {
    dispatch(getPacksTC());
  }, []);
  return (
    <MainContainer>
      <LeftContainer>
        <h2 className={classes.title}>Show packs cards</h2>
        <div className={classes.btnContainer}>
          <button type="button" className={classes.btn}>
            My
          </button>
          <button type="button" className={classes.btn}>
            All
          </button>
        </div>
        <span className={classes.text}>Number of cards</span>
        <div className={classes.range}>
          <RangeSlider />
        </div>
      </LeftContainer>
      <div className={classes.packsListContainer}>
        <h2 className={classes.title}>Packs list</h2>
        <div className={classes.blockSearch}>
          <div className={classes.search}>
            <InputSearch />
          </div>
          <div className={classes.btnAdd}>
            <Button color="#21268F" type={undefined}>
              Add new pack
            </Button>
          </div>
        </div>
        <div className={classes.tableHeader}>
          <div>Name</div>
          <div>Cards</div>
          <div>LastUpdate</div>
          <div>Created by</div>
          <div>Actions</div>
        </div>
        {cardsPacks.map(pack => (
          <PackItem key={pack.created} pack={pack} />
        ))}
      </div>
    </MainContainer>
  );
};
export default PacksList;
