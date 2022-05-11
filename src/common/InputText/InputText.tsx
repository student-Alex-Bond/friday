import React, { ChangeEvent, FC, memo } from 'react';

import classes from './InputText.module.css';

type InputTextType = {
  name: string;
  value: string;
  onChange: (value: ChangeEvent<HTMLInputElement>) => void;
  title: string;
  placeholder: string;
};
const InputText: FC<InputTextType> = memo(
  ({ name, value, onChange, title, placeholder }) => (
    <div style={{ width: '100%' }}>
      <label htmlFor="inputText" className={classes.label}>
        {title}
        <input
          id="inputText"
          name={name}
          type="text"
          className={classes.input}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </label>
    </div>
  ),
);

export { InputText };
