import React, { FC } from 'react';

import classes from './InputSearch.module.css';

const InputSearch: FC = () => (
  <form className={classes.search}>
    <input type="search" placeholder="Search..." className={classes.search} />
  </form>
);

export { InputSearch };
