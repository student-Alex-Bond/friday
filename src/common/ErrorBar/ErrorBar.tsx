import React, { FC, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../store/store';

import classes from './ErrorBar.module.css';

import { setError } from 'componets/App/app-reducer';

const ErrorBar: FC = () => {
  const dispatch = useDispatch();
  const errorMessage = useSelector<RootState, string | null>(
    state => state.app.errorMessage,
  );

  const windowDisplayTime = 3000;

  useEffect(() => {
    const IntervalID = setTimeout(() => {
      dispatch(setError(null));
    }, windowDisplayTime);

    return () => {
      clearInterval(IntervalID);
    };
  }, []);

  const onCloseBar = (): void => {
    dispatch(setError(null));
  };
  return (
    <div className={classes.errorMessage}>
      <div>{errorMessage}</div>
      <div className={classes.btnContainer}>
        <button className={classes.btn} type="button" onClick={onCloseBar}>
          &times;
        </button>
      </div>
    </div>
  );
};

export { ErrorBar };
