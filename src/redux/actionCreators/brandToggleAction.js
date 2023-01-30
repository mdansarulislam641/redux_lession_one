import { TOGGLE_BRAND, TOGGLE_STOCK } from "../actionTypes/actionTypes"

export const brandToggleAction = (brandName) =>{
    return {
        type : TOGGLE_BRAND,
        payload : brandName
    }
}

export const stockToggleAction = () =>{
    return {
        type:TOGGLE_STOCK
    }
}