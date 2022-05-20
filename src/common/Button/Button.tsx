import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';

import classes from './Button.module.css';

type DefaultButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
type ButtonPropsType = DefaultButtonProps & {
  type: 'submit' | 'button';
};

const Button: FC<ButtonPropsType> = ({ children, type, onClick }) => (
  <div>
    <button type={type ? 'submit' : 'button'} className={classes.btn} onClick={onClick}>
      {children}
    </button>
  </div>
);

export { Button };
