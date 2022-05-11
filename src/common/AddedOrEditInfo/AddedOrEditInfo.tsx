import React, { FC } from 'react';

import { Link } from 'react-router-dom';

import { Button } from '../Button';
import { FormContainer } from '../FormContainer';

import classes from './AddedOrEditInfo.module.css';

export type AddedOrEditInfoType = {
  pathLinkCancel: string;
  handeSubmit: () => void;
  title: string;
};

const AddedOrEditInfo: FC<AddedOrEditInfoType> = ({
  children,
  pathLinkCancel,
  handeSubmit,
  title,
}) => (
  <FormContainer>
    <form onSubmit={handeSubmit}>
      <h1 className={classes.title}>{title}</h1>
      {children}
      <div className={classes.btnWrapper}>
        <div className={classes.cancel}>
          <Link to={pathLinkCancel}>Cancel</Link>
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
