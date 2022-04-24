import React, { FC } from 'react';

import { useFormik } from 'formik';
import { Link } from 'react-router-dom';

import { FormContainer } from '../../../common/FormContainer';

import classes from './PersonalInfo.module.css';

import ava from 'assets/avatar/avatar-svgrepo-com.svg';
import changePhoto from 'assets/changePhoto/changePhoto.svg';
import { Button } from 'common/Button';

const PersonalInfo: FC = () => {
  const formik = useFormik({
    initialValues: {
      nick: '',
      email: '',
    },
    onSubmit: values => alert(values),
  });
  return (
    <FormContainer>
      <form onSubmit={formik.handleSubmit} className={classes.form}>
        <h1 className={classes.title}>Personal Information</h1>
        <div className={classes.avatar}>
          <img src={ava} alt="avatar" />
          <label htmlFor="changePhoto" className={classes.changePhoto}>
            <input type="file" id="changePhoto" />
            <img src={changePhoto} alt="photos" />
          </label>
        </div>
        <label htmlFor="nick">
          Nick name
          <input
            id="nick"
            type="text"
            name="nick"
            onChange={formik.handleChange}
            value={formik.values.nick}
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            id="email"
            type="text"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </label>
        <div className={classes.btnCancel}>
          <Link to="/profile">Cancel</Link>
        </div>
        <div className={classes.btn}>
          <Button color="#21268F" type="submit">
            Save
          </Button>
        </div>
      </form>
    </FormContainer>
  );
};

export { PersonalInfo };
