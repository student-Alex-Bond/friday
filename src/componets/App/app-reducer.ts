const initialState: InitialStateType = {
  status: 'idle',
  error: null,
  isInitialized: false,
};

export type InitialStateType = {
  status: RequestStatusType;
  error: null;
  isInitialized: boolean;
};

export type ActionsType = any;

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed';

export const appReducer = (
  state: InitialStateType = initialState,
  action: ActionsType,
): InitialStateType => {
  switch (action.type) {
    default:
      return state;
  }
};
