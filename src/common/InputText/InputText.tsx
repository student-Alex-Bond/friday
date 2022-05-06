import React, { ChangeEvent, FC } from 'react';

import classes from './InputText.module.css';

type InputTextType = {
  name: string;
  value: string;
  onChange: (value: ChangeEvent<HTMLInputElement>) => void;
  title: string;
  placeholder: string;
};
const InputText: FC<InputTextType> = ({ name, value, onChange, title, placeholder }) => (
  <div style={{ width: '100%' }}>
    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
    <label className={classes.label}>
      {title}
      <input
        name={name}
        type="text"
        className={classes.input}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </label>
  </div>
);

export { InputText };
