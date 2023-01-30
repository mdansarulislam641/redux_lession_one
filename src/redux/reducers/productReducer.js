import { ADD_TO_CARD, REMOVE_TO_CARD } from "../actionTypes/actionTypes";

const initialState = {
    card : []
};
const productReducer = (state = initialState , action) =>{
    const selectedProduct = state.card.find(product => product.id === action.payload.id);
    // console.log(selectedProduct, "selected")
    switch(action.type){
        case ADD_TO_CARD:
            if(selectedProduct){
                const newCard = state.card.filter(product => product.id !== action.payload.id)
                selectedProduct.quantity = selectedProduct.quantity + 1 ;
                return {
                    ...state , 
                    card : [...newCard , selectedProduct]
                }
            }
        return {
            ...state ,
            card : [...state.card , {...action.payload, quantity : 1}]

        };
        case REMOVE_TO_CARD :
            if(selectedProduct.quantity > 1) {
                const newCard = state.card.filter(product => product.id !== action.payload.id)
                selectedProduct.quantity = selectedProduct.quantity - 1 ;
                return {
                    ...state ,
                    card : [...newCard , selectedProduct]
                }
            }
          
            return {
                ...state , 
                card : state.card.filter(product => product.id !== action.payload.id)
            }
        default :
        return state 
        
    }
}
export default productReducer ;