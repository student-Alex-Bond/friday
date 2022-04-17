import React, { FC } from 'react';

import classes from './TextError.module.css';

type TextErrorType = {
  value: string | undefined;
  touched: boolean | undefined;
};

const TextError: FC<TextErrorType> = ({ value, touched }) => (
  <div className={classes.error}>
    {value && touched ? <div className={classes.errorText}>{value}</div> : null}
  </div>
);

export { TextError };
