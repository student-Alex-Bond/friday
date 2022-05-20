import React, { FC, memo } from 'react';

import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { AddedOrEditInfo } from '../../../common/AddedOrEditInfo/AddedOrEditInfo';
import { InputText } from '../../../common/InputText';
import { RootState } from '../../../store';

import classes from './AddOrEditCard.module.css';
import {
  addedNewCard,
  modeType,
  setAnswer,
  setQuestion,
  updateCard,
} from './card-reducer';

const AddOrEditCard: FC = memo(() => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const mode = useSelector<RootState, modeType>(state => state.card.mode);
  const reduxQuestion = useSelector<RootState, string>(state => state.card.question);
  const reduxAnswer = useSelector<RootState, string>(state => state.card.answer);
  const goBack = -1;
  const formik = useFormik({
    initialValues: {
      question: reduxQuestion,
      answer: reduxAnswer,
    },
    onSubmit: values => {
      dispatch(setQuestion(values.question));
      dispatch(setAnswer(values.answer));
      if (mode === 'added') {
        dispatch(addedNewCard());
      }
      if (mode === 'edit') {
        dispatch(updateCard());
      }
      navigate(goBack);
    },
  });
  return (
    <AddedOrEditInfo
      handeSubmit={formik.handleSubmit}
      title={mode === 'edit' ? 'edit card' : 'card info'}
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
      <label htmlFor="questionDownload" className={classes.label}>
        <input id="questionDownload" type="file" />+ Attach file
      </label>
      <div className={classes.answer}>
        <InputText
          name="answer"
          value={formik.values.answer}
          onChange={formik.handleChange}
          title="Answer"
          placeholder="enter your answer"
        />
      </div>
      <label htmlFor="answerDownload" className={classes.label}>
        <input id="answerDownload" type="file" />+ Attach file
      </label>
    </AddedOrEditInfo>
  );
});

export { AddOrEditCard };
