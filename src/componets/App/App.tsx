import React, { FC, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Navigation, routes } from '../Navigation/Navigation';

import classes from './App.module.css';

import { UserType } from 'componets/Login/types/types';
import { RootState } from 'store/store';

const App: FC = () => {
  const user = useSelector<RootState, UserType | null>(state => state.login.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (user === null) {
      navigate('/profile');
    }
  }, []);

  return (
    <div className={classes.container}>
      <Navigation routes={routes} />
    </div>
  );
};
export default App;
