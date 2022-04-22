const initialState: InitialStateType = {
  status: 'idle',
  errorMessage: null,
  isInitialized: false,
};

export type InitialStateType = {
  status: RequestStatusType;
  errorMessage: null | string;
  isInitialized: boolean;
};
export type SetErrorType = ReturnType<typeof setError>;
export type ActionsType = isInitializedType | SetErrorType;

export type isInitializedType = ReturnType<typeof isInitialized>;

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed';

const SET_IS_INITIALIZED = 'app/SET-IS-INITIALIZED';
export const SET_ERROR = 'app/SET-ERROR';

export const appReducer = (
  state: InitialStateType = initialState,
  action: ActionsType,
): InitialStateType => {
  switch (action.type) {
    case SET_IS_INITIALIZED: {
      return { ...state, isInitialized: action.payload };
    }
    case SET_ERROR:
      return { ...state, errorMessage: action.payload };

    default:
      return state;
  }
};

export const isInitialized = (value: boolean) =>
  ({ type: SET_IS_INITIALIZED, payload: value } as const);

export const setError = (error: string | null) =>
  ({ type: SET_ERROR, payload: error } as const);
