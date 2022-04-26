import React, { FC, memo, useEffect } from 'react';

import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { RootState } from '../../store/store';

import { loginUserTC, LoginUserType } from './actions';
import classes from './Login.module.css';
import { selectUser } from './selectors';
import { UserType } from './types';

import rocket from 'assets/preloader/preloader.gif';
import { Button } from 'common/Button/Button';
import { FormContainer } from 'common/FormContainer/FormContainer';
import { InputPassword } from 'common/InputPassword/InputPassword';
import { TextError } from 'common/TextError';

const Login: FC = memo(() => {
  const status = useSelector<RootState, string | null>(state => state.app.status);
  const user = useSelector<RootState, UserType | null>(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (user !== null) {
      navigate('/');
    }
  }, [user]);
  const formik = useFormik({
    validate: values => {
      const errors = {};

      const minPasswordLength = 7;
      if (!values.email) {
        return {
          email: 'email is required',
        };
      }
      if (!/^[A-Z\d._%+-]+@[A-Z\d.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        return { email: 'Invalid email address' };
      }

      if (!values.password) {
        return {
          password: 'password is required',
        };
      }
      if (values.password.length < minPasswordLength) {
        return {
          password: 'Password must be more than 7 characters',
        };
      }
      return errors;
    },
    initialValues: {
      email: '',
      password: '',
      rememberMe: 'false',
    },
    onSubmit: values => {
      const currentUser: LoginUserType = {
        email: values.email,
        password: values.password,
        rememberMe: values.rememberMe !== 'false',
      };
      dispatch(loginUserTC(currentUser));
    },
  });
  return (
    <FormContainer>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <h1>Learn English</h1>
        <h2>sing in</h2>
        <div style={{ height: '64px' }}>
          {status === 'loading' && <img src={rocket} alt="rocket" />}
        </div>
        <div />
        <span style={{ fontSize: '12px' }}>1qazxcvBG</span>
        <div>
          <span className={classes.label}>Email</span>
          <input
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            type="text"
            className={classes.email}
            placeholder="enter email"
          />
          <TextError value={formik.errors.email} touched={formik.touched.email} />
        </div>
        <div className={classes.inputPassWrapper}>
          <InputPassword
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          <TextError value={formik.errors.password} touched={formik.touched.password} />
        </div>
        <div className={classes.forgotWrapper}>
          <div className={classes.checkbox}>
            <input
              name="rememberMe"
              value={formik.values.rememberMe}
              type="checkbox"
              onChange={formik.handleChange}
            />
            <span className={classes.label}>Remember Me</span>
          </div>
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
    </FormContainer>
  );
});

export { Login };
