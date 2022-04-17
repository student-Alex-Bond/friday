import React, { FC } from 'react';

import { useFormik } from 'formik';
import { Link } from 'react-router-dom';

import { InputPassword } from '../../common/InputPassword/InputPassword';

import classes from './Login.module.css';

import { Button } from 'common/Button/Button';

const Login: FC = () => {
  const formik = useFormik({
    validate: values => {
      const errors = {};

      const passwordLength = 6;
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
      if (values.password.length < passwordLength) {
        return {
          password: 'Password must be more than 6 characters',
        };
      }
      return errors;
    },
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null));
    },
  });
  return (
    <div className={classes.container}>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <h1>Learn English</h1>
        <h2>sing in</h2>

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
          <div className={classes.error}>
            {formik.errors.email && formik.touched.email ? (
              <div className={classes.errorText}>{formik.errors.email}</div>
            ) : null}
          </div>
        </div>
        <div className={classes.inputPassWrapper}>
          <InputPassword name="password" formik={formik} />
          <div className={classes.error}>
            {formik.errors.password && formik.touched.password ? (
              <div className={classes.errorText}>{formik.errors.password}</div>
            ) : null}
          </div>
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
