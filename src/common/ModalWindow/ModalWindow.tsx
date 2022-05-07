import React, { FC } from 'react';

import { isViewType } from '../../componets/PacksList/PacksList';

import classes from './ModalWindow.module.css';

type ModalWindowType = {
  isView: isViewType;
  setIsView: (isView: isViewType) => void;
  title: string;
  addedNewPack: () => void;
};
const ModalWindow: FC<ModalWindowType> = ({
  addedNewPack,
  isView,
  title,
  setIsView,
  children,
}) => {
  const closeWindow = (): void => {
    setIsView({ ...isView, showModalNewPack: false });
  };
  const modeDisplay = isView.showModalNewPack
    ? { display: 'block' }
    : { display: 'none' };
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
          <button onClick={addedNewPack} type="button">
            Save
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
