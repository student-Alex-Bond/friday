import React, { FC, memo, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { InputSearch } from '../../common/InputSearch';
import { Pagination } from '../../common/Pagination';
import { Select } from '../../common/Select';
import { RootState } from '../../store';
import { logoutTC } from '../Login/actions';
import { selectUser } from '../Login/selectors';
import { CardsPackType, getPacksTC } from '../PacksList/packsReducer';
import {
  selectedCardsCountTotalCount,
  selectedCardsPacks,
  selectedCurrentPage,
  selectedPageCount,
} from '../PacksList/selectors';
import { Table } from '../PacksList/Table';

import classes from './Profile.module.css';

import ava from 'assets/avatar/avatar-svgrepo-com.svg';
import iconLogout from 'assets/imgaes/logout.svg';
import { LeftContainer } from 'common/LeftContainer';
import { MainContainer } from 'common/MainContainer';
import { UserType } from 'componets/Login/types';

const Profile: FC = memo(() => {
  const dispatch = useDispatch();
  const cardsPacks = useSelector<RootState, CardsPackType[]>(selectedCardsPacks);
  const pageCount = useSelector<RootState, number>(selectedPageCount);
  const currentPage = useSelector<RootState, number>(selectedCurrentPage);
  const cardsCountTotalCount = useSelector<RootState, number>(
    selectedCardsCountTotalCount,
  );
  const user = useSelector<RootState, UserType | null>(selectUser);
  const currentAvatar = useSelector<RootState, string | undefined>(
    state => state.login.user?.avatar,
  );
  let userName = 'Ivan Ivanov';
  if (user) {
    userName = user.name;
  }

  const avatar = currentAvatar || ava;

  const logout = (): void => {
    dispatch(logoutTC());
  };
  useEffect(() => {
    dispatch(getPacksTC());
  }, []);

  return (
    <MainContainer>
      <LeftContainer>
        <button className={classes.logout} type="button" onClick={logout}>
          <img src={iconLogout} alt="logout" />
        </button>
        <img className={classes.avatar} src={avatar} alt="avatar" />
        <h1 className={classes.name}>{userName}</h1>
        <span className={classes.professional}>Front-end Developer</span>
        <Link to="profile/personal-info" type="button" className={classes.editProfile}>
          Edit profile
        </Link>
      </LeftContainer>
      <div className={classes.profileContent}>
        <h1 className={classes.title}>Packs list {userName}’s</h1>
        <div className={classes.search}>
          <InputSearch
            initialValue=""
            getValueSearchInput={() => {}}
            placeholder="search"
          />
        </div>
        <div>
          <Table cardsPacks={cardsPacks} showModalDeletePack={() => {}} />
        </div>
        <div className={classes.paginator}>
          <Pagination currentPage={currentPage} totalCount={cardsCountTotalCount} />
          <Select numberOfPages={String(pageCount)} />
        </div>
      </div>
    </MainContainer>
  );
});

export { Profile };
