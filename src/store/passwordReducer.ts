
const initialState = {}

export const passwordReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type){
        default:
            return state
    }
}
type InitialStateType = typeof initialState
type  ActionsType = any