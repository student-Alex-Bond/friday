import React, { FC } from 'react';

import { useFormik } from 'formik';

import classes from './NewPassword.module.css';

import { Button } from 'common/Button';
import { FormContainer } from 'common/FormContainer';
import { InputPassword } from 'common/InputPassword';
import { TextError } from 'common/TextError';

const NewPassword: FC = () => {
  const formik = useFormik({
    validate: values => {
      const error = {};
      if (!values.password) {
        return {
          password: 'password is required',
        };
      }
      return error;
    },
    initialValues: {
      password: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null));
    },
  });
  return (
    <FormContainer>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <h1>Learn English</h1>
        <h2>Create new password</h2>
        <div style={{ width: '100%' }}>
          <InputPassword
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          <TextError value={formik.errors.password} touched={formik.touched.password} />
        </div>
        <span className={classes.text}>
          Create new password and we will send you further instructions to email
        </span>
        <Button type="submit">Create new password</Button>
      </form>
    </FormContainer>
  );
};

export { NewPassword };
