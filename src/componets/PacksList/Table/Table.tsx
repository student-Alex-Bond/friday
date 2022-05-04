import React, { FC, memo } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { SortedButton } from '../../../common/SortedButton';
import { RootState } from '../../../store';
import {
  setPackName,
  setPackNameID,
  setPageCountCards,
} from '../PackItem/pack-item-reducer';
import { CardsPackType, setSortPacks } from '../packsReducer';
import { selectedSortPack } from '../selectors';

import classes from './Table.module.css';

type TableType = {
  cardsPacks: CardsPackType[];
};
const Table: FC<TableType> = memo(({ cardsPacks }) => {
  const dispatch = useDispatch();
  const sortedPacks = useSelector<RootState, string>(selectedSortPack);
  const userID = useSelector<RootState, string | undefined>(
    state => state.cardsPacks.queryParams.haveID,
  );
  // eslint-disable-next-line no-underscore-dangle
  const myID = useSelector<RootState, string | undefined>(state => state.login.user?._id);
  const changeMethodSort = (methodSort: string): void => {
    dispatch(setSortPacks(`${methodSort}updated`));
  };
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
            <th>
              <div style={{ display: 'flex' }}>
                Last Update
                <SortedButton
                  sortedPacks={sortedPacks}
                  changeMethodSort={changeMethodSort}
                />
              </div>
            </th>
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
              const goCurrentPackName = (): void => {
                dispatch(setPackName(pack.name));
                // eslint-disable-next-line no-underscore-dangle
                dispatch(setPackNameID(pack._id));
                dispatch(setPageCountCards(pack.cardsCount));
              };
              return (
                <tr className={classes.row} key={pack.created}>
                  <td>
                    <NavLink to="/packs-list/pack-item" onClick={goCurrentPackName}>
                      {pack.name}
                    </NavLink>
                  </td>
                  <td>{pack.cardsCount}</td>
                  <td>{createdDate}</td>
                  <td>{pack.user_name}</td>
                  <td colSpan={2}>
                    {userID === myID && (
                      <>
                        <button className={classes.btn} type="button">
                          Delete
                        </button>
                        <button className={classes.btn} type="button">
                          Edit
                        </button>
                      </>
                    )}
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
