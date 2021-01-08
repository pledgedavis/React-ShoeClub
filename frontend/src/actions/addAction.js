import { ADD_PRODUCT_CART } from './type'


export const addBasket = () => {

    return (dispatch) => {

        dispatch({
            type: ADD_PRODUCT_CART
        })
    }
}