import React, { FC } from 'react';

import classes from './LearnPage.module.css';

const LearnPage: FC = () => (
  <div className={classes.container}>
    <h1 className={classes.title}>Learn &quot;Pack Name&quot;</h1>
    <span className={classes.question}>
      Question: How &quot;This&quot; works in JavaScript?
    </span>
    <div className={classes.btn}>
      <button type="button">Cancel</button>
      <button type="button">Show Answer</button>
    </div>
  </div>
);

export { LearnPage };
