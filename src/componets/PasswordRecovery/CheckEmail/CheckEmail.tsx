import React, { FC } from 'react';

import classes from './CheckEmail.module.css';

import checkEmail from 'assets/checkEmail/checkEmail.svg';
import { FormContainer } from 'common/FormContainer';

const CheckEmail: FC = () => (
  <FormContainer>
    <div className={classes.form}>
      <h1>Learn English</h1>
      <img className={classes.img} src={checkEmail} alt="mail" />
      <h2>Check Email</h2>
      <span className={classes.text}>
        We’ve sent an Email with instructions to your mail
      </span>
    </div>
  </FormContainer>
);

export { CheckEmail };
