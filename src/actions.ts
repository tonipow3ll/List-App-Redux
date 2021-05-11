export type Action = {type: "ADD_ITEM", payload: string}


export const addItem = (item:string):Action => ({
    type: "ADD_ITEM", payload: item
})