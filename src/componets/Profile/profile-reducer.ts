const initialState = {};
type InitialStateType = typeof initialState;

type ActionType = any;

export const profileReducer = (
  state: InitialStateType = initialState,
  action: ActionType,
): InitialStateType => {
  switch (action.type) {
    default:
      return { ...state };
  }
};
