import React, { FC } from 'react';

import classes from './FormContainer.module.css';

const FormContainer: FC = ({ children }) => (
  <div className={classes.container}>
    <div className={classes.form}>{children}</div>
  </div>
);

export { FormContainer };
