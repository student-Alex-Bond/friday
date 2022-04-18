import React, { ChangeEvent, FC, useState } from 'react';

import eyeClose from '../../assets/eye/eye-close.png';
import eyeOpen from '../../assets/eye/eye-open.png';

import classes from './InputPassword.module.css';

type InputPasswordType = {
  name: string;
  value: string;
  onChange: (value: ChangeEvent<HTMLInputElement>) => void;
};

const InputPassword: FC<InputPasswordType> = ({ name, value, onChange }) => {
  const [values, setValue] = useState({
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
          onChange={onChange}
          value={value}
          name={name}
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
