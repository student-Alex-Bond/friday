import React, { FC } from 'react';

import classes from './App.module.css';
import { Navigation, routes } from './componets/Navigation/Navigation';

const App: FC = () => (
  <div className={classes.container}>
    <Navigation routes={routes} />
  </div>
);

export default App;
