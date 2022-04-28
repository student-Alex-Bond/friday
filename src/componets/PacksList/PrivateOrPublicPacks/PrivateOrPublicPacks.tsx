import React, { FC } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../../store/store';
import { setMyId } from '../packsReducer';

import classes from './PrivateOrPublicPacks.module.css';

const PrivateOrPublicPacks: FC = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line no-underscore-dangle
  const myID = useSelector<RootState, string | undefined>(state => state.login.user?._id);
  const haveID = useSelector<RootState, string | undefined>(
    state => state.cardsPacks.queryParams.haveID,
  );

  const privatePacks = (): void => {
    if (myID) {
      dispatch(setMyId(myID));
    }
  };
  const publicPacks = (): void => {
    dispatch(setMyId(undefined));
  };
  return (
    <div className={classes.btnContainer}>
      <button
        onClick={privatePacks}
        type="button"
        className={
          haveID !== undefined ? `${classes.btn} ${classes.btnActive}` : `${classes.btn}`
        }
      >
        My
      </button>
      <button
        onClick={publicPacks}
        type="button"
        className={
          haveID === undefined ? `${classes.btn} ${classes.btnActive}` : `${classes.btn}`
        }
      >
        All
      </button>
    </div>
  );
};

export { PrivateOrPublicPacks };
