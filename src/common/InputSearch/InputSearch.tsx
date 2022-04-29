import React, { ChangeEvent, FC, useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';

import { setCurrentPage, setSearchValue } from '../../componets/PacksList/packsReducer';

import classes from './InputSearch.module.css';

const InputSearch: FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>('');

  const onChangeValue = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.currentTarget.value);
  };
  useEffect(() => {
    const firstPage = 1;
    const waitingTime = 1500;
    const timerId = setTimeout(() => dispatch(setSearchValue(value)), waitingTime);
    dispatch(setCurrentPage(firstPage));
    return () => {
      clearTimeout(timerId);
    };
  }, [value]);
  return (
    <form className={classes.search}>
      <input
        onChange={onChangeValue}
        type="search"
        placeholder="Search..."
        className={classes.search}
        value={value}
      />
    </form>
  );
};
export { InputSearch };
