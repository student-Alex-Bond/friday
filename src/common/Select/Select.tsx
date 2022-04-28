import React, { ChangeEvent, FC, useState } from 'react';

import classes from './Select.module.css';

export const numberOfPages = ['5', '10', '15'];

type SelectType = {};

const Select: FC<SelectType> = () => {
  const firstElementInArray = 0;
  const [option, setOption] = useState<string>(numberOfPages[firstElementInArray]);

  const currentSelectIndex = (event: ChangeEvent<HTMLSelectElement>): void => {
    const selectIndex = event.currentTarget.options.selectedIndex;
    setOption(numberOfPages[selectIndex]);
  };
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
