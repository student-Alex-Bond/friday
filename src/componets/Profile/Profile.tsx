import React, { FC, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { errorSelector } from './selectors/selectors';

import { getUserTC } from 'componets/Login/actions/actions';

const Profile: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const errorMessage = errorSelector;
  useEffect(() => {
    dispatch(getUserTC());
  }, []);

  useEffect(() => {
    if (errorMessage !== null) {
      navigate('/login');
    }
  }, [errorMessage]);

  return <div>Profile</div>;
};

export { Profile };
