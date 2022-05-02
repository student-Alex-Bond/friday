import React, { ChangeEvent, FC, useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';

import { setCurrentPage } from '../../componets/PacksList/packsReducer';

import classes from './InputSearch.module.css';

type InputSearchType = {
  initialValue: string;
  getValueSearchInput: (value: string) => void;
  placeholder: string;
};

const InputSearch: FC<InputSearchType> = ({
  initialValue,
  getValueSearchInput,
  placeholder,
}) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>(initialValue);

  const onChangeValue = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.currentTarget.value);
  };
  useEffect(() => {
    const firstPage = 1;
    const waitingTime = 1500;
    const timerId = setTimeout(() => getValueSearchInput(value), waitingTime);
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
        placeholder={placeholder}
        className={classes.search}
        value={value}
      />
    </form>
  );
};
export { InputSearch };
