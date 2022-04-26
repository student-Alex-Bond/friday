import React, { FC } from 'react';

import { CardsPackType } from '../packsReducer';

import classes from './PackItem.module.css';

type PackItemType = {
  pack: CardsPackType;
};

const PackItem: FC<PackItemType> = ({ pack }) => {
  const createdDate = new Date(pack.created).toLocaleDateString();
  return (
    <div className={classes.tableItem}>
      <div>{pack.name}</div>
      <div>{pack.cardsCount}</div>
      <div>{createdDate}</div>
      <div>{pack.user_name}</div>
      <div>
        <button className={classes.btn} type="button">
          Delete
        </button>
        <button className={classes.btn} type="button">
          Edit
        </button>
        <button className={classes.btn} type="button">
          Learn
        </button>
      </div>
    </div>
  );
};
export { PackItem };
