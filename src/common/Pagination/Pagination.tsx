import React, { FC } from 'react';

import { useDispatch } from 'react-redux';

import { setCurrentPage } from '../../componets/PacksList/packsReducer';

import classes from './Pagination.module.css';

import arrowRight from 'assets/arrow/arroe_right.svg';
import arrowLeft from 'assets/arrow/arrow_left.svg';

// eslint-disable-next-line @typescript-eslint/no-magic-numbers
const pages = [1, 2, 3, 4, 5, 6, 7];

type PaginationType = {
  currentPage: number;
};

const Pagination: FC<PaginationType> = ({ currentPage }) => {
  const dispatch = useDispatch();

  const onChangePage = (selectedPage: number): void => {
    dispatch(setCurrentPage(selectedPage));
  };
  const prevPage = (): void => {
    const firstPage = 1;
    if (currentPage === firstPage) {
      return;
    }
    dispatch(setCurrentPage(currentPage - firstPage));
  };

  const nexPage = (): void => {
    // дописать ограничение для страницы вперед
    const onePageForward = 1;
    dispatch(setCurrentPage(currentPage + onePageForward));
  };

  return (
    <div className={classes.pagination}>
      <button type="button" className={classes.pageItem} onClick={prevPage}>
        <img className={classes.arrow} src={arrowLeft} alt="arrow left" />
      </button>
      {pages.map(pageNumber => (
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
      <button type="button" className={classes.pageItem} onClick={nexPage}>
        <img className={classes.arrow} src={arrowRight} alt="arrow right" />
      </button>
    </div>
  );
};
export { Pagination };
