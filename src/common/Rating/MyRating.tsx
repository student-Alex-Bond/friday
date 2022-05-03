import * as React from 'react';
import { FC } from 'react';

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

type MyRatingType = {
  value: number;
};

const MyRating: FC<MyRatingType> = ({ value }) => (
  <Box
    sx={{
      '& > legend': { mt: 2 },
    }}
  >
    <Rating name="read-only" value={value} readOnly />
  </Box>
);
export { MyRating };
