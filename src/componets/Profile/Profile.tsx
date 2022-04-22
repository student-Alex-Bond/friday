import React, { FC, memo, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { RootState } from '../../store/store';
import { logoutTC } from '../Login/actions/actions';
import { selectUser } from '../Login/selectors';

import { UserType } from 'componets/Login/types/types';

const Profile: FC = memo(() => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector<RootState, UserType | null>(selectUser);

  const logout = (): void => {
    dispatch(logoutTC());
  };

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user]);

  return (
    <div>
      Profile
      <button type="button" onClick={logout}>
        logout
      </button>
    </div>
  );
});

export { Profile };
