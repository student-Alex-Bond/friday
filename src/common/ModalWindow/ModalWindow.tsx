import React, { FC } from 'react';

import classes from './ModalWindow.module.css';

type ModalWindowType = {
  isView: boolean;
  title: string;
  clickActionCallback: () => void;
  nameButton: string;
  closeWindow: () => void;
};
const ModalWindow: FC<ModalWindowType> = ({
  clickActionCallback,
  isView,
  title,
  closeWindow,
  children,
  nameButton,
}) => {
  const modeDisplay = isView ? { display: 'block' } : { display: 'none' };
  return (
    <>
      <div style={modeDisplay} className={classes.message}>
        <div className={classes.container}>
          <span className={classes.title}>{title}</span>
          <button onClick={closeWindow} type="button" className={classes.close}>
            &times;
          </button>
        </div>
        <hr style={{ backgroundColor: '#EDF0F6', margin: '15px 0' }} />
        <div style={{ width: '100%' }}>{children}</div>
        <hr style={{ backgroundColor: '#EDF0F6', margin: '15px 0 15px 0' }} />
        <div className={classes.btnContainer}>
          <button onClick={closeWindow} type="button">
            Cancel
          </button>
          <button onClick={clickActionCallback} type="button">
            {nameButton}
          </button>
        </div>
      </div>
      <button
        aria-label="Close"
        type="button"
        style={modeDisplay}
        className={classes.viewWindow}
        onClick={closeWindow}
      />
    </>
  );
};

export { ModalWindow };
