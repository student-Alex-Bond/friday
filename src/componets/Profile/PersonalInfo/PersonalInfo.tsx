import React, { ChangeEvent, FC } from 'react';

import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { FormContainer } from '../../../common/FormContainer';
import { RootState } from '../../../store/store';
import { changePersonalInfoTC } from '../../Login/actions';

import classes from './PersonalInfo.module.css';

import ava from 'assets/avatar/avatar-svgrepo-com.svg';
import changePhoto from 'assets/changePhoto/changePhoto.svg';
import { Button } from 'common/Button';

const PersonalInfo: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentAvatar = useSelector<RootState, string | undefined>(
    state => state.login.user?.avatar,
  );
  const formik = useFormik({
    initialValues: {
      name: '',
      avatar: '',
    },
    onSubmit: values => {
      dispatch(changePersonalInfoTC(values));
      navigate('/');
    },
  });

  const avatar = currentAvatar || ava;

  return (
    <FormContainer>
      <form onSubmit={formik.handleSubmit} className={classes.form}>
        <h1 className={classes.title}>Personal Information</h1>
        <div className={classes.avatar}>
          <img src={avatar} alt="avatar" />
          <label htmlFor="changePhoto" className={classes.changePhoto}>
            <input
              name="avatar"
              type="file"
              id="changePhoto"
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                const firstFileInArray = 0;
                if (event.currentTarget.files) {
                  const file = event.currentTarget.files[firstFileInArray];
                  const reader = new FileReader();
                  reader.onloadend = function setPhotoInFormatBase64() {
                    formik.setFieldValue('avatar', reader.result);
                  };
                  reader.readAsDataURL(file);
                }
              }}
            />
            <img src={changePhoto} alt="photos" />
          </label>
        </div>
        <label htmlFor="nick" className={classes.label}>
          Nick name
          <input
            className={classes.input}
            id="nick"
            type="text"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            placeholder="Enter your nick"
          />
        </label>
        <div className={classes.btnWrapper}>
          <div className={classes.btnCancel}>
            <Link to="/">Cancel</Link>
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
};

export { PersonalInfo };
