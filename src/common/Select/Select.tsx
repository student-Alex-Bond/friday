import React, { ChangeEvent, FC, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setCurrentPage, setPageCount } from '../../componets/PacksList/packsReducer';
import { RootState } from '../../store';

import classes from './Select.module.css';

export const numberOfPages = ['5', '10', '15'];

type SelectType = {
  page: string;
};

const Select: FC<SelectType> = ({ page }) => {
  const dispatch = useDispatch();
  const [option, setOption] = useState<string>(page);
  const pageCount = useSelector<RootState, number>(
    state => state.cardsPacks.queryParams.pageCount,
  );
  const currentSelectIndex = (event: ChangeEvent<HTMLSelectElement>): void => {
    const selectIndex = event.currentTarget.options.selectedIndex;
    setOption(numberOfPages[selectIndex]);
  };
  useEffect(() => {
    if (String(pageCount) === page) {
      return;
    }
    dispatch(setPageCount(Number(option)));
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    dispatch(setCurrentPage(1));
  }, [page]);
  const mappedOptions = numberOfPages.map(optionItem => (
    <option key={optionItem}>{optionItem}</option>
  ));
  return (
    <select className={classes.select} onChange={currentSelectIndex} value={option}>
      {mappedOptions}
    </select>
  );
};

export { Select };
