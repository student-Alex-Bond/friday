import React, { FC } from 'react';

import { useNavigate } from 'react-router-dom';

import classes from './ButtonCancel.module.css';

const ButtonCancel: FC = () => {
  const navigate = useNavigate();
  const back = -1;
  const goBack = (): void => {
    navigate(back);
  };
  return (
    <div>
      <button className={classes.btn} onClick={goBack} type="button">
        Cancel
      </button>
    </div>
  );
};

export { ButtonCancel };
