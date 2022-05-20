import React, { FC, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { selectUser } from '../../componets/Login/selectors';
import { UserType } from '../../componets/Login/types';
import { RootState } from '../../store';

const RedirectOnLogin: FC = ({ children }) => {
  const navigate = useNavigate();
  const user = useSelector<RootState, UserType | null>(selectUser);
  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user]);

  return children as React.ReactElement;
};

export { RedirectOnLogin };
