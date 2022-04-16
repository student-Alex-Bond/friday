import React, { FC } from 'react';

import { Link } from 'react-router-dom';

import { InputPassword } from '../../common/InputPassword/InputPassword';

import classes from './Login.module.css';

import { Button } from 'common/Button/Button';

const Login: FC = () => (
  <div className={classes.container}>
    <form className={classes.form}>
      <h1>Learn English</h1>
      <h2>sing in</h2>

      <div>
        <span className={classes.label}>Email</span>
        <input type="email" className={classes.email} placeholder="enter email" />
      </div>
      <div className={classes.inputPassWrapper}>
        <InputPassword />
      </div>
      <div className={classes.forgotWrapper}>
        <Link className={classes.forgotPass} to="/new-password">
          Forgot Password
        </Link>
      </div>
      <div className={classes.btn}>
        <Button color="#21268F">Login</Button>
      </div>
      <span className={classes.dontAcc}>Don&apos;t have an account?</span>
      <Link className={classes.singUp} to="/registration">
        sing Up
      </Link>
    </form>
  </div>
);

export { Login };
