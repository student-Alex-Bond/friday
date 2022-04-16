import React, { FC } from 'react';

import classes from './Button.module.css';

type ButtonPropsType = {
  color: string;
};

const Button: FC<ButtonPropsType> = ({ children, color }) => (
  <button style={{ backgroundColor: color }} className={classes.btn} type="button">
    {children}
  </button>
);

export { Button };
