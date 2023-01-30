import { ADD_TO_CARD, REMOVE_TO_CARD } from "../actionTypes/actionTypes"

export const  addToCard = (product) =>{
    return {
        type:ADD_TO_CARD ,
        payload: product
    }
}
export const removeCard  = (id) =>{
    return {
        type:REMOVE_TO_CARD ,
        payload: id
    }
}