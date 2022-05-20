import React, { FC } from 'react';

import { Button } from '../../common/Button';

import classes from './LearnPage.module.css';

import { ButtonCancel } from 'common/ButtonCancel';

const LearnPage: FC = () => (
  <div className={classes.container}>
    <h1 className={classes.title}>Learn &quot;Pack Name&quot;</h1>
    <span className={classes.question}>
      Question: How &quot;This&quot; works in JavaScript?
    </span>
    <div className={classes.btn}>
      <ButtonCancel>Cancel</ButtonCancel>
      <Button type="button">Show Answer</Button>
    </div>
  </div>
);

export { LearnPage };
