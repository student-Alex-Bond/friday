import React, { FC } from 'react';

import classes from './LeftContainer.module.css';

const LeftContainer: FC = ({ children }) => (
  <div className={classes.leftContainer}>{children}</div>
);

export { LeftContainer };
