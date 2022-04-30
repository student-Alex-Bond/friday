import React, { FC, memo } from 'react';

import { CardsPackType } from '../../componets/PacksList/packsReducer';

import classes from './Table.module.css';

type TableType = {
  cardsPacks: CardsPackType[];
};
const Table: FC<TableType> = memo(({ cardsPacks }) => {
  const zero = 0;
  if (cardsPacks.length === zero) {
    return <div className={classes.notFound}>This packName not found</div>;
  }
  return (
    <div className={classes['scroll-table']}>
      <table className={classes.table}>
        <thead>
          <tr className={classes.header}>
            <th>Name</th>
            <th>Cards</th>
            <th>Last Update</th>
            <th>Created by</th>
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
      </table>
      <div className={classes['scroll-table-body']}>
        <table>
          <tbody>
            {cardsPacks.map(pack => {
              const createdDate = new Date(pack.created).toLocaleDateString();
              return (
                <tr className={classes.row} key={pack.created}>
                  <td>{pack.name}</td>
                  <td>{pack.cardsCount}</td>
                  <td>{createdDate}</td>
                  <td>{pack.user_name}</td>
                  <td colSpan={2}>
                    <button className={classes.btn} type="button">
                      Delete
                    </button>
                    <button className={classes.btn} type="button">
                      Edit
                    </button>
                    <button className={classes.btn} type="button">
                      Learn
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
});
export { Table };
