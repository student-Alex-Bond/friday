import React, { FC, memo, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { RootState } from '../../store/store';
import { selectUser } from '../Login/selectors';

import { UserType } from 'componets/Login/types/types';

const Profile: FC = memo(() => {
  const navigate = useNavigate();
  const user = useSelector<RootState, UserType | null>(selectUser);

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user]);

  return <div>Profile</div>;
});

export { Profile };
