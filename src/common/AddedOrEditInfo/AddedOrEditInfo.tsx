import React, { FC } from 'react';

import { Button } from '../Button';
import { ButtonCancel } from '../ButtonCancel';
import { FormContainer } from '../FormContainer';

import classes from './AddedOrEditInfo.module.css';

export type AddedOrEditInfoType = {
  handeSubmit: () => void;
  title: string;
};

const AddedOrEditInfo: FC<AddedOrEditInfoType> = ({ children, handeSubmit, title }) => (
  <FormContainer>
    <form onSubmit={handeSubmit}>
      <h1 className={classes.title}>{title}</h1>
      {children}
      <div className={classes.btnWrapper}>
        <div className={classes.cancel}>
          <ButtonCancel />
        </div>
        <div className={classes.btn}>
          <Button color="#21268F" type="submit">
            Save
          </Button>
        </div>
      </div>
    </form>
  </FormContainer>
);

export { AddedOrEditInfo };
