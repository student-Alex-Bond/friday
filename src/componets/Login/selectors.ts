import { RootState } from '../../store/store';

import { UserType } from 'componets/Login/types/types';

export const selectUser = (state: RootState): UserType | null => state.login.user;
