import * as React from 'react';
import { FC } from 'react';

import Backdrop from '@mui/material/Backdrop';

import rocket from 'assets/preloader/preloader.gif';

const MyBackdrop: FC = () => {
  const open = true;
  const one = 1;
  return (
    <div>
      <Backdrop
        sx={{
          backgroundColor: 'rgba(255,255,255, 0.7)',
          zIndex: theme => theme.zIndex.drawer + one,
        }}
        open={open}
      >
        <div>
          <img src={rocket} alt="rocket" />
        </div>
      </Backdrop>
    </div>
  );
};

export { MyBackdrop };
