import React, { ChangeEvent, FC, useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';

import { setPageCount } from '../../componets/PacksList/packsReducer';

import classes from './Select.module.css';

export const countOfPages = ['5', '10', '15'];

type SelectType = {
  page: string;
};

const Select: FC<SelectType> = ({ page }) => {
  const dispatch = useDispatch();
  const [option, setOption] = useState<string>(page);
  const currentSelectIndex = (event: ChangeEvent<HTMLSelectElement>): void => {
    const selectIndex = event.currentTarget.options.selectedIndex;
    setOption(countOfPages[selectIndex]);
  };
  useEffect(() => {
    dispatch(setPageCount(Number(option)));
  }, [option]);
  const mappedOptions = countOfPages.map(optionItem => (
    <option key={optionItem}>{optionItem}</option>
  ));
  return (
    <select className={classes.select} onChange={currentSelectIndex} value={option}>
      {mappedOptions}
    </select>
  );
};

export { Select };
