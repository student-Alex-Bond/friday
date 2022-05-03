import React, { FC, memo } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../../store';
import { setCurrentPage, setMyId } from '../packsReducer';
import { selectedId } from '../selectors';

import classes from './PrivateOrPublicPacks.module.css';

const PrivateOrPublicPacks: FC = memo(() => {
  const dispatch = useDispatch();
  // eslint-disable-next-line no-underscore-dangle
  const myID = useSelector<RootState, string | undefined>(state => state.login.user?._id);
  const haveID = useSelector<RootState, string | undefined>(selectedId);

  const privatePacks = (): void => {
    if (myID) {
      const firstPage = 1;
      dispatch(setMyId(myID));
      dispatch(setCurrentPage(firstPage));
    }
  };
  const publicPacks = (): void => {
    const firstPage = 1;
    dispatch(setMyId(undefined));
    dispatch(setCurrentPage(firstPage));
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
});

export { PrivateOrPublicPacks };
