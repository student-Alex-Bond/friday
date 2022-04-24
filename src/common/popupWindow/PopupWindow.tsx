import React, { FC, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setMessage } from '../../componets/App/app-reducer';
import { RootState } from '../../store/store';

import classes from './PopupWindiw.module.css';

const PopupWindow: FC = () => {
  const message = useSelector<RootState, string | null>(state => state.app.message);
  const dispatch = useDispatch();

  const windowDisplayTime = 6000;

  useEffect(() => {
    const IntervalID = setTimeout(() => {
      dispatch(setMessage(null));
    }, windowDisplayTime);

    return () => {
      clearInterval(IntervalID);
    };
  }, []);

  const onCloseBar = (): void => {
    dispatch(setMessage(null));
  };
  return (
    <div className={classes.message}>
      <div>{message}</div>
      <div className={classes.btnContainer}>
        <button className={classes.btn} type="button" onClick={onCloseBar}>
          &times;
        </button>
      </div>
    </div>
  );
};

export { PopupWindow };
