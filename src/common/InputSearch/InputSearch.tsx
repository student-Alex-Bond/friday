import React, { ChangeEvent, FC, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setCurrentPage } from '../../componets/PacksList/packsReducer';

import classes from './InputSearch.module.css';

import { RootState } from 'store';

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
  const inputSearch = useSelector<RootState, string>(
    state => state.cardsPacks.queryParams.packName,
  );
  const onChangeValue = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.currentTarget.value);
  };

  useEffect(() => {
    if (inputSearch === value) {
      return;
    }
    const firstPage = 1;
    const waitingTime = 1500;
    const timerId = setTimeout(() => getValueSearchInput(value), waitingTime);
    dispatch(setCurrentPage(firstPage));
    // eslint-disable-next-line consistent-return
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
