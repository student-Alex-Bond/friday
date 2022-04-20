import React, { FC, memo, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getUserTC } from '../Login/actions/actions';
import { selectUser } from '../Login/selectors';
import { Navigation, routes } from '../Navigation/Navigation';

import classes from './App.module.css';

import { UserType } from 'componets/Login/types/types';
import { RootState } from 'store/store';

const App: FC = memo(() => {
  const dispatch = useDispatch();
  const user = useSelector<RootState, UserType | null>(selectUser);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUserTC());
  }, []);

  useEffect(() => {
    if (user === null) {
      navigate('/profile');
    }
  }, [user]);

  return (
    <div className={classes.container}>
      <Navigation routes={routes} />
    </div>
  );
});
export default App;
