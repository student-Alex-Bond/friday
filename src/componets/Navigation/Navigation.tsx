import React, { FC } from 'react';

import { NavLink, Route, Routes } from 'react-router-dom';

import { PersonalInfo } from '../Profile/PersonalInfo/PersonalInfo';

import styles from './Navigation.module.css';

import { Login } from 'componets/Login';
import { NewPassword } from 'componets/NewPassword';
import { NotFound } from 'componets/NotFound';
import { PasswordRecovery } from 'componets/PasswordRecovery';
import { CheckEmail } from 'componets/PasswordRecovery/CheckEmail';
import { Profile } from 'componets/Profile';
import { Registration } from 'componets/Registration';

export const routes = [
  { to: '/login', component: <Login />, name: 'Login' },
  { to: '/', component: <Profile />, name: 'Profile' },
  { to: '/registration', component: <Registration />, name: 'Registration' },
  { to: '/new-password', component: <NewPassword />, name: 'NewPassword' },
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
  <div className={styles.nav}>
    <div className={styles.link}>
      {routes.map(route => (
        <NavLink
          className={({ isActive }) => (isActive ? `${styles.active}` : ``)}
          key={route.to}
          to={route.to}
        >
          {route.name}
        </NavLink>
      ))}
    </div>
    <Routes>
      {routes.map(route => (
        <Route key={route.to} path={route.to} element={route.component} />
      ))}
      <Route key={7} path="/password-recovery/check-email" element={<CheckEmail />} />
      <Route key={8} path="profile/personal-info" element={<PersonalInfo />} />
    </Routes>
  </div>
);

export { Navigation };
