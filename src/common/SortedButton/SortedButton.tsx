import React, { FC, useEffect, useState } from 'react';

import arrowDown from '../../assets/arrow/arrow_down.svg';

import classes from './SortedButton.module.css';

type SortedButtonType = {
  sortedPacks: string;
  changeMethodSort: (methodSort: string) => void;
};

const SortedButton: FC<SortedButtonType> = ({ sortedPacks, changeMethodSort }) => {
  const zero = 0;
  const [methodSort, setMethodSort] = useState<string>(sortedPacks[zero]);
  const changeSort = (): void => {
    if (sortedPacks[zero] === '0') {
      setMethodSort('1');
    } else {
      setMethodSort('0');
    }
  };
  useEffect(() => {
    if (sortedPacks === methodSort) {
      return;
    }
    changeMethodSort(methodSort);
  }, [methodSort]);
  return (
    <button
      onClick={changeSort}
      className={sortedPacks[zero] === '0' ? `${classes.btnDown}` : `${classes.btnUp}`}
      type="button"
    >
      <img src={arrowDown} alt="arrow down" />
    </button>
  );
};

export { SortedButton };
