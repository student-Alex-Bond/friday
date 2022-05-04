import React, { FC } from 'react';

import classes from './ModalWindow.module.css';

type ModalWindowType = {
  isView: boolean;
  setIsView: (value: boolean) => void;
};
const ModalWindow: FC<ModalWindowType> = ({ isView, children, setIsView }) => {
  const closeWindow = (): void => {
    setIsView(false);
  };
  let modeDisplay = {};
  modeDisplay = isView ? { display: 'block' } : { display: 'none' };
  return (
    <button
      type="button"
      style={modeDisplay}
      className={classes.viewWindow}
      onClick={closeWindow}
    >
      {children}
    </button>
  );
};

export { ModalWindow };
