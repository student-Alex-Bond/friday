const initialState: InitialStateType = {
  status: 'idle',
  errorMessage: null,
  isInitialized: false,
  message: null,
};

export type InitialStateType = {
  status: RequestStatusType;
  errorMessage: null | string;
  isInitialized: boolean;
  message: null | string;
};
export type SetErrorType = ReturnType<typeof setError>;
export type SetAppStatusType = ReturnType<typeof setAppStatus>;
export type SetMessageType = ReturnType<typeof setMessage>;
export type ActionsType =
  | isInitializedType
  | SetErrorType
  | SetAppStatusType
  | SetMessageType;

export type isInitializedType = ReturnType<typeof isInitialized>;

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed';

export const SET_IS_INITIALIZED = 'app/SET-IS-INITIALIZED';
export const SET_ERROR = 'app/SET-ERROR';
export const SET_APP_STATUS = 'app/SET-APP-STATUS';
export const SET_MESSAGE = 'app/SET-MESSAGE';

export const appReducer = (
  state: InitialStateType = initialState,
  action: ActionsType,
): InitialStateType => {
  switch (action.type) {
    case SET_IS_INITIALIZED:
      return { ...state, isInitialized: action.payload };
    case SET_ERROR:
      return { ...state, errorMessage: action.payload };
    case SET_APP_STATUS:
      return { ...state, status: action.payload };
    case SET_MESSAGE:
      return { ...state, message: action.payload };
    default:
      return state;
  }
};

export const isInitialized = (value: boolean) =>
  ({ type: SET_IS_INITIALIZED, payload: value } as const);

export const setError = (error: string | null) =>
  ({ type: SET_ERROR, payload: error } as const);

export const setAppStatus = (status: RequestStatusType) =>
  ({ type: SET_APP_STATUS, payload: status } as const);

export const setMessage = (message: string | null) =>
  ({ type: SET_MESSAGE, payload: message } as const);
