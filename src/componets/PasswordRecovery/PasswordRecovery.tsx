import React, { FC } from 'react';

import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';

import { InputText } from '../../common/InputText';

import classes from './PasswordRecovery.module.css';

import { Button } from 'common/Button';
import { FormContainer } from 'common/FormContainer';
import { TextError } from 'common/TextError';

const PasswordRecovery: FC = () => {
  const navigate = useNavigate();
  const toCheckEmail = (): void => navigate('/password-recovery/check-email');
  const formik = useFormik({
    validate: values => {
      const error = {};

      if (!values.email) {
        return {
          email: 'email is required',
        };
      }
      if (!/^[A-Z\d._%+-]+@[A-Z\d.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        return { email: 'Invalid email address' };
      }
      return error;
    },
    initialValues: {
      email: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null));
      toCheckEmail();
    },
  });

  return (
    <FormContainer>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <h1>Learn English</h1>
        <h2>Forgot your password</h2>
        <InputText
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          title="Email"
          placeholder="enter your email"
        />
        <TextError value={formik.errors.email} touched={formik.touched.email} />
        <span className={classes.text}>
          Enter your email address and we will send you further instructions{' '}
        </span>
        <Button type="submit" onClick={toCheckEmail}>
          Send Instruction
        </Button>
      </form>
      <span className={classes.question}>Did you remember your password?</span>
      <Link className={classes.link} to="/login">
        Try logging in
      </Link>
    </FormContainer>
  );
};
export { PasswordRecovery };
