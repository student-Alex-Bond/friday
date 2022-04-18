import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';

import classes from './Button.module.css';

type DefaultButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
type ButtonPropsType = DefaultButtonProps & {
  color: string;
  type: 'submit' | undefined;
};

const Button: FC<ButtonPropsType> = ({ children, color, type }) => (
  <button
    type={type ? 'submit' : 'button'}
    style={{ backgroundColor: color }}
    className={classes.btn}
  >
    {children}
  </button>
);

export { Button };
