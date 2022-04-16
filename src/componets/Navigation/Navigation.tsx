import React from 'react';

import { NavLink, Route, Routes } from 'react-router-dom';

import { Login } from '../Login/Login';
import { NewPassword } from '../NewPassword/NewPassword';
import { NotFound } from '../NotFound/NotFound';
import { PasswordRecovery } from '../PasswordRecovery/PasswordRecovery';
import { Profile } from '../Profile/Profile';
import { Registration } from '../Registration/Registration';

import styles from './Navigation.module.css';

export const routes = [
  { id: 1, to: '/login', component: <Login />, name: 'Login' },
  { id: 2, to: '/profile', component: <Profile />, name: 'Profile' },
  { id: 3, to: '/registration', component: <Registration />, name: 'Registration' },
  { id: 4, to: '/new-password', component: <NewPassword />, name: 'NewPassword' },
  {
    id: 5,
    to: '/password-recovery',
    component: PasswordRecovery,
    name: 'PasswordRecovery',
  },
  { id: 6, to: '/not-found', component: NotFound, name: 'NotFound' },
];
type RoutesType = typeof routes;

type NavigationPropsType = {
  routes: RoutesType;
};

const Navigation: React.FC<NavigationPropsType> = () => (
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
    </Routes>
  </div>
);

export { Navigation };
