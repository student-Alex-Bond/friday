import * as React from 'react';
import { FC } from 'react';

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useDispatch } from 'react-redux';

import { setMinMaxContCards } from '../../componets/PacksList/packsReducer';

function valuetext(value: number): string {
  return String(value);
}

const RangeSlider: FC = () => {
  const dispatch = useDispatch();
  const startValue = 0;
  const endValue = 12;
  const [value, setValue] = React.useState<number[]>([startValue, endValue]);

  const handleChange = (event: Event, newValue: number | number[]): void => {
    setValue(newValue as number[]);
    dispatch(setMinMaxContCards(value));
  };
  return (
    <Box sx={{ width: 180 }}>
      <Slider
        getAriaLabel={() => 'Number of cards in a deck'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="on"
        getAriaValueText={valuetext}
        max={150}
      />
    </Box>
  );
};

export { RangeSlider };
