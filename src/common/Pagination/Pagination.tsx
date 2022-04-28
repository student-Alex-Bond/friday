import React, { FC } from 'react';

import classes from './Pagination.module.css';

import arrowRight from 'assets/arrow/arroe_right.svg';
import arrowLeft from 'assets/arrow/arrow_left.svg';

// eslint-disable-next-line @typescript-eslint/no-magic-numbers
const pages = [1, 2, 3, 4, 5, 6, 7];

type PaginationType = {
  currentPage: number;
};

const Pagination: FC<PaginationType> = ({ currentPage }) => (
  <div className={classes.pagination}>
    <div>
      <img className={classes.arrow} src={arrowLeft} alt="arrow left" />
    </div>
    {pages.map(pageNumber => (
      <span
        className={
          currentPage === pageNumber
            ? `${classes.pageItem} ${classes.active}`
            : `${classes.pageItem}`
        }
        key={pageNumber}
      >
        {pageNumber}
      </span>
    ))}
    <div>
      <img className={classes.arrow} src={arrowRight} alt="arrow right" />
    </div>
  </div>
);
export { Pagination };
