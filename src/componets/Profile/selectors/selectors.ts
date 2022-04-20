import { useSelector } from 'react-redux';

import { RootState } from '../../../store/store';

export const errorSelector = useSelector<RootState, string | null>(
  state => state.login.errorMessage,
);
