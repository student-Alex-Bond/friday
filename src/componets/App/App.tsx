import React, { FC, memo, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { ErrorBar } from '../../common/ErrorBar/ErrorBar';
import { getUserTC } from '../Login/actions/actions';
import { Navigation, routes } from '../Navigation/Navigation';

import classes from './App.module.css';

import rhombus from 'assets/romb/romb.gif';
import { RootState } from 'store/store';

const App: FC = memo(() => {
  const dispatch = useDispatch();
  const isInitialized = useSelector<RootState, boolean>(state => state.app.isInitialized);
  const errorMessage = useSelector<RootState, string | null>(
    state => state.app.errorMessage,
  );
  useEffect(() => {
    dispatch(getUserTC());
  }, []);

  if (!isInitialized) {
    return (
      <div style={{ position: 'fixed', top: '40%', textAlign: 'center', width: '100%' }}>
        <img src={rhombus} alt="rhombus" />
      </div>
    );
  }

  return (
    <div className={classes.container}>
      {errorMessage && <ErrorBar />}
      <Navigation routes={routes} />
    </div>
  );
});
export default App;
