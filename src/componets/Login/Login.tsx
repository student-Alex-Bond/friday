import React, { FC } from 'react';

import { useFormik } from 'formik';
import { Link } from 'react-router-dom';

import { InputPassword } from '../../common/InputPassword/InputPassword';

import classes from './Login.module.css';

import { Button } from 'common/Button/Button';

const Login: FC = () => {
  const formik = useFormik({
    validate: values => {
      if (!values.email) {
        return {
          email: 'email is required',
        };
      }

      if (!values.password) {
        return {
          password: 'password is required',
        };
      }
    },
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {},
  });
  return (
    <div className={classes.container}>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <h1>Learn English</h1>
        <h2>sing in</h2>

        <div>
          <span className={classes.label}>Email</span>
          <input
            {...formik.getFieldProps('email')}
            type="email"
            className={classes.email}
            placeholder="enter email"
          />
        </div>
        <div className={classes.inputPassWrapper}>
          <InputPassword name="password" formik={formik} />
        </div>
        <div className={classes.forgotWrapper}>
          <Link className={classes.forgotPass} to="/new-password">
            Forgot Password
          </Link>
        </div>
        <div className={classes.btn}>
          <Button type="submit" color="#21268F">
            Login
          </Button>
        </div>
        <span className={classes.dontAcc}>Don&apos;t have an account?</span>
        <Link className={classes.singUp} to="/registration">
          sing Up
        </Link>
      </form>
    </div>
  );
};

export { Login };
