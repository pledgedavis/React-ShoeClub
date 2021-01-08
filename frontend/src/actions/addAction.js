import { ADD_PRODUCT_CART } from './type'
// whenever products are clicked by user this action is ran 

export const addBasket = () => {

    return (dispatch) => {
        
        dispatch({
            type: ADD_PRODUCT_CART
        })
    }
}