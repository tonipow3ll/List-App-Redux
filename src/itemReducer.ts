import { Action } from "./actions"

export interface itemState {
    items: string[]
}
const initialState = {
    items: []
}


export const itemReducer = (state:itemState = initialState, action: Action) => {

    switch(action.type){
        case "ADD_ITEM": {
            return { ...state, items: [ ...state.items, action.payload]}
        }
        default:
            return state
    }
}