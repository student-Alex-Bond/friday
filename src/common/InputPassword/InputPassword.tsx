import React, { FC, useState } from 'react';

import eyeClose from '../../assets/eye/eye-close.png';
import eyeOpen from '../../assets/eye/eye-open.png';

import classes from './InputPassword.module.css';

const InputPassword: FC = () => {
  const [values, setValue] = useState({
    password: '',
    showPassword: false,
  });

  const onClickShowPassword = (): void => {
    setValue({ ...values, showPassword: !values.showPassword });
  };

  const showEye = values.showPassword ? eyeOpen : eyeClose;
  const typeButton = values.showPassword ? 'text' : 'password';

  return (
    <div className={classes.container}>
      <span className={classes.label}>Password</span>
      <div className={classes.imgWrapper}>
        <input
          autoComplete="true"
          type={typeButton}
          className={classes.password}
          placeholder="enter password"
        />
        <button type="button" className={classes.btn} onClick={onClickShowPassword}>
          <img className={classes.eye} src={showEye} alt="eye" />
        </button>
      </div>
    </div>
  );
};
export { InputPassword };