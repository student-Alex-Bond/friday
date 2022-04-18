import React, { FC } from 'react';

import { NavLink, Route, Routes } from 'react-router-dom';

import styles from './Navigation.module.css';

import { Login } from 'componets/Login';
import { NewPassword } from 'componets/NewPassword';
import { NotFound } from 'componets/NotFound';
import { PasswordRecovery } from 'componets/PasswordRecovery';
import { CheckEmail } from 'componets/PasswordRecovery/CheckEmail';
import { Profile } from 'componets/Profile';
import { Registration } from 'componets/Registration';

export const routes = [
  { id: 1, to: '/login', component: <Login />, name: 'Login' },
  { id: 2, to: '/profile', component: <Profile />, name: 'Profile' },
  { id: 3, to: '/registration', component: <Registration />, name: 'Registration' },
  { id: 4, to: '/new-password', component: <NewPassword />, name: 'NewPassword' },
  {
    id: 5,
    to: '/password-recovery',
    component: <PasswordRecovery />,
    name: 'PasswordRecovery',
  },
  { id: 6, to: '*', component: <NotFound />, name: 'NotFound' },
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
          key={route.id}
          to={route.to}
        >
          {route.name}
        </NavLink>
      ))}
    </div>
    <Routes>
      {routes.map(route => (
        <Route key={route.id} path={route.to} element={route.component} />
      ))}
      <Route key={7} path="/password-recovery/check-email" element={<CheckEmail />} />
    </Routes>
  </div>
);

export { Navigation };
