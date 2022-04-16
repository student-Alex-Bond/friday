const initialState = {};

export const loginReducer = (
  state: InitialStateType = initialState,
  action: ActionsType,
): InitialStateType => {
  switch (action.type) {
    default:
      return state;
  }
};
export type ActionsType = any;

type InitialStateType = typeof initialState;
