import React, { FC } from 'react';

import classes from './MainContainer.module.css';

const MainContainer: FC = ({ children }) => (
  <div className={classes.mainContainer}>{children}</div>
);

export { MainContainer };
