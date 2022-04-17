import React, { FC } from 'react';

import { useFormik } from 'formik';
import { Link } from 'react-router-dom';

import { Button } from '../../common/Button/Button';
import { FormContainer } from '../../common/FormContainer/FormContainer';
import { InputPassword } from '../../common/InputPassword/InputPassword';

import classes from './Registration.module.css';

const Registration: FC = () => {
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
      confirmPassword: '',
    },
    onSubmit: values => {
      alert(values);
    },
  });
  return (
    <FormContainer>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <h1>Learn English</h1>
        <h2>Sing Up</h2>
        <div style={{ marginBottom: '25px' }}>
          <span className={classes.label}>Email</span>
          <input type="text" className={classes.email} placeholder="enter email" />
        </div>
        <div style={{ marginBottom: '25px', width: '100%' }}>
          <InputPassword
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
        </div>
        <div style={{ marginBottom: '65px', width: '100%' }}>
          <InputPassword
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
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
      </form>
    </FormContainer>
  );
};

export { Registration };
