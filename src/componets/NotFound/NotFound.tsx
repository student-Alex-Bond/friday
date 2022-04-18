import React, { FC } from 'react';

import styles from './NotFound.module.css';

import robot from 'assets/robot/roger.webp';

const NotFound: FC = () => (
  <div className={styles.error}>
    <h1>
      <strong>Oh, man. I am is totally lost.</strong>
    </h1>
    <h2>
      <strong>Not Found Error 404</strong>
    </h2>
    <div className={styles.robot}>
      <img src={robot} alt="robot" />
    </div>
  </div>
);

export { NotFound };
