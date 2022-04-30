import React, { FC, memo, useState } from 'react';

import { useDispatch } from 'react-redux';

import { setCurrentPage } from '../../componets/PacksList/packsReducer';

import classes from './Pagination.module.css';

import arrowRight from 'assets/arrow/arroe_right.svg';
import arrowLeft from 'assets/arrow/arrow_left.svg';

type PaginationType = {
  currentPage: number;
  totalCount: number;
};
const Pagination: FC<PaginationType> = memo(({ currentPage, totalCount }) => {
  const dispatch = useDispatch();
  const pageSize = 10;
  const pagesCount = Math.ceil(totalCount / pageSize);
  const pages: number[] = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  const [portionNumber, setPortionNumber] = useState<number>(1);
  const leftPortionPageNumber = portionNumber;
  const rightPortionPageNUmber = portionNumber + pageSize;
  const prevPortion = (): void => {
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    if (portionNumber === 1) {
      return;
    }
    setPortionNumber(portionNumber - pageSize);
  };
  const nexPortion = (): void => {
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    if (portionNumber === pagesCount - 1) {
      return;
    }
    setPortionNumber(portionNumber + pageSize);
  };

  const onChangePage = (selectedPage: number): void => {
    dispatch(setCurrentPage(selectedPage));
  };
  const zero = 0;
  if (totalCount === zero) {
    return <div>{null}</div>;
  }
  return (
    <div className={classes.pagination}>
      <button type="button" className={classes.pageItem} onClick={prevPortion}>
        <img className={classes.arrow} src={arrowLeft} alt="arrow left" />
      </button>
      {pages
        .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNUmber)
        .map(pageNumber => (
          <button
            type="button"
            className={
              currentPage === pageNumber
                ? `${classes.pageItem} ${classes.active}`
                : `${classes.pageItem}`
            }
            key={pageNumber}
            onClick={() => onChangePage(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
      <div style={{ fontWeight: 'bold' }}>. . .</div>
      <button type="button" className={classes.pageItem}>
        {/* eslint-disable-next-line @typescript-eslint/no-magic-numbers */}
        {pages[pages.length - 1]}
      </button>
      <button type="button" className={classes.pageItem} onClick={nexPortion}>
        <img className={classes.arrow} src={arrowRight} alt="arrow right" />
      </button>
    </div>
  );
});
export { Pagination };
