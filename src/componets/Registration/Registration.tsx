import React, { FC, useEffect } from 'react';

import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { RootState } from '../../store/store';

import { AddedUserType, createUserTC } from './registerReducer';
import classes from './Registration.module.css';

import { Button } from 'common/Button';
import { FormContainer } from 'common/FormContainer';
import { InputPassword } from 'common/InputPassword';
import { TextError } from 'common/TextError';

const Registration: FC = () => {
  const dispatch = useDispatch();
  const addedUser = useSelector<RootState, AddedUserType | null>(
    state => state.register.addedUser,
  );
  const error = useSelector<RootState, string | null>(state => state.register.error);
  const navigate = useNavigate();
  useEffect(() => {
    if (addedUser !== null) {
      navigate('/login');
    }
  }, [addedUser]);

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
      if (values.password !== values.confirmPassword) {
        return {
          confirmPassword: 'passwords do not match',
        };
      }
      return errors;
    },
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: values => {
      const newUser = { email: values.email, password: values.password };
      dispatch(createUserTC(newUser));
    },
  });
  return (
    <FormContainer>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <h1>Learn English</h1>
        <h2>Sing Up</h2>
        <div style={{ marginBottom: '5px' }}>
          <span className={classes.label}>Email</span>
          <input
            type="text"
            className={classes.email}
            placeholder="enter email"
            value={formik.values.email}
            onChange={formik.handleChange}
            name="email"
          />
          <TextError value={formik.errors.email} touched={formik.touched.email} />
        </div>
        <div style={{ marginBottom: '5px', width: '100%' }}>
          <InputPassword
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          <TextError value={formik.errors.password} touched={formik.touched.password} />
        </div>
        <div style={{ marginBottom: '45px', width: '100%' }}>
          <InputPassword
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
          />
          <TextError
            value={formik.errors.confirmPassword}
            touched={formik.touched.confirmPassword}
          />
        </div>
        <div className={classes.btnContainer}>
          <div className={classes.btnCancel}>
            <Link className={classes.btnLink} to="/profile">
              Cancel
            </Link>
          </div>
          <div className={classes.btnRegistration}>
            <Button type="submit" color="#21268F">
              Registration
            </Button>
          </div>
        </div>
        <div style={{ marginTop: '20px', color: 'red' }}>
          {error && <div>{error}</div>}
        </div>
      </form>
    </FormContainer>
  );
};

export { Registration };
