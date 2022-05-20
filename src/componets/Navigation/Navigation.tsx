import React, { FC } from 'react';

import { NavLink, Route, Routes } from 'react-router-dom';

import { LearnPage } from '../LearnPage';
import { AddOrEditCard } from '../PacksList/AddOrEditCard/AddOrEditCard';

import classes from './Navigation.module.css';

import { Login } from 'componets/Login';
import { NewPassword } from 'componets/NewPassword';
import { NotFound } from 'componets/NotFound';
import { PacksList } from 'componets/PacksList';
import { PackItems } from 'componets/PacksList/PackItem';
import { PasswordRecovery } from 'componets/PasswordRecovery';
import { CheckEmail } from 'componets/PasswordRecovery/CheckEmail';
import { Profile } from 'componets/Profile';
import { PersonalInfo } from 'componets/Profile/PersonalInfo/PersonalInfo';
import { Registration } from 'componets/Registration';

export const routes = [
  { to: '/login', component: <Login />, name: 'Login' },
  { to: '/', component: <Profile />, name: 'Profile' },
  { to: '/registration', component: <Registration />, name: 'Registration' },
  { to: '/new-password', component: <NewPassword />, name: 'NewPassword' },
  { to: '/packs-list', component: <PacksList />, name: 'PacksList' },
  {
    to: '/password-recovery',
    component: <PasswordRecovery />,
    name: 'PasswordRecovery',
  },
  { to: '*', component: <NotFound />, name: 'NotFound' },
];
type RoutesType = typeof routes;

type NavigationPropsType = {
  routes: RoutesType;
};

const Navigation: FC<NavigationPropsType> = () => (
  <div className={classes.container}>
    <div className={classes.nav}>
      <div className={classes.menu}>
        {routes.map(route => (
          <NavLink
            className={({ isActive }) =>
              isActive ? `${classes.active} ${classes.link}` : `${classes.link}`
            }
            key={route.to}
            to={route.to}
          >
            {route.name}
          </NavLink>
        ))}
      </div>
      <div className={classes.content}>
        <Routes>
          {routes.map(route => (
            <Route key={route.to} path={route.to} element={route.component} />
          ))}
          <Route key={7} path="/password-recovery/check-email" element={<CheckEmail />} />
          <Route key={8} path="profile/personal-info" element={<PersonalInfo />} />
          <Route key={9} path="packs-list/pack-item" element={<PackItems />} />
          <Route
            key={10}
            path="packs-list/pack-item/add-new-card"
            element={<AddOrEditCard />}
          />
          <Route key={11} path="profile/learn-page" element={<LearnPage />} />
        </Routes>
      </div>
    </div>
  </div>
);

export { Navigation };
