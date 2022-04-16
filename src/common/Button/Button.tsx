import React, { FC } from 'react';

import classes from './Button.module.css';

type ButtonPropsType = {
  color: string;
  type: 'button' | 'submit' | 'reset' | undefined;
};

const Button: FC<ButtonPropsType> = ({ children, color, type }) => (
  <button type={type} style={{ backgroundColor: color }} className={classes.btn}>
    {children}
  </button>
);

export { Button };
