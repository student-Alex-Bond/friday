import React, { FC, memo, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { RootState } from '../../store/store';
import { logoutTC } from '../Login/actions';
import { selectUser } from '../Login/selectors';

import classes from './Profile.module.css';

import ava from 'assets/avatar/avatar-svgrepo-com.svg';
import { UserType } from 'componets/Login/types';

const Profile: FC = memo(() => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector<RootState, UserType | null>(selectUser);
  let userName = 'Ivan Ivanov';
  if (user) {
    userName = user.name;
  }

  const logout = (): void => {
    dispatch(logoutTC());
  };

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user]);

  return (
    <div className={classes.profileContainer}>
      <button className={classes.logout} type="button" onClick={logout}>
        logout
      </button>
      <div className={classes.userContainer}>
        <img className={classes.avatar} src={ava} alt="avatar" />
        <h1 className={classes.name}>{userName}</h1>
        <span className={classes.professional}>Front-end Developer</span>
        <Link to="profile/personal-info" type="button" className={classes.editProfile}>
          Edit profile
        </Link>
      </div>
    </div>
  );
});

export { Profile };
