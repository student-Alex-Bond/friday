import React, { FC, memo } from 'react';

import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { AddedOrEditInfo } from '../../../common/AddedOrEditInfo/AddedOrEditInfo';
import { InputText } from '../../../common/InputText';

import classes from './AddNewCard.module.css';
import { addedNewCard, setAnswer, setQuestion } from './card-reducer';

const AddNewCard: FC = memo(() => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const goBack = -1;
  const formik = useFormik({
    initialValues: {
      question: '',
      answer: '',
    },
    onSubmit: values => {
      dispatch(setQuestion(values.question));
      dispatch(setAnswer(values.answer));
      dispatch(addedNewCard());
      navigate(goBack);
    },
  });
  return (
    <AddedOrEditInfo
      pathLinkCancel="/packs-list/pack-item"
      handeSubmit={formik.handleSubmit}
      title="card info"
    >
      <div className={classes.question}>
        <InputText
          name="question"
          value={formik.values.question}
          onChange={formik.handleChange}
          title="Question"
          placeholder="enter new question"
        />
      </div>
      <div className={classes.answer}>
        <InputText
          name="answer"
          value={formik.values.answer}
          onChange={formik.handleChange}
          title="Answer"
          placeholder="enter your answer"
        />
      </div>
    </AddedOrEditInfo>
  );
});

export { AddNewCard };
