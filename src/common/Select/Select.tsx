import React, { ChangeEvent, FC, useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';

import { setPageCount } from '../../componets/PacksList/packsReducer';

import classes from './Select.module.css';

export const countOfPages = ['5', '10', '15'];

type SelectType = {
  numberOfPages: string;
};

const Select: FC<SelectType> = ({ numberOfPages }) => {
  const dispatch = useDispatch();
  const [option, setOption] = useState<string>(numberOfPages);
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
    <div className={classes.container}>
      <span className={classes.text}>show </span>
      <select className={classes.select} onChange={currentSelectIndex} value={option}>
        {mappedOptions}
      </select>
      <span className={classes.text}> card per page</span>
    </div>
  );
};

export { Select };
