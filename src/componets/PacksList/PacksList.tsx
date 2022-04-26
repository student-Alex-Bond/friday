import React, { FC } from 'react';

import { InputSearch } from '../../common/InputSearch/InputSearch';
import LeftContainer from '../../common/LeftContainer/LeftContainer';
import { MainContainer } from '../../common/MainContainer/MainContainer';
import { RangeSlider } from '../../common/RangeSlider/RangeSlider';

import classes from './PacksList.module.css';

import { Button } from 'common/Button';

const PacksList: FC = () => (
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
        <div className={classes.btn}>
          <Button color="#21268F" type={undefined}>
            Add new pack
          </Button>
        </div>
      </div>
    </div>
  </MainContainer>
);

export default PacksList;
