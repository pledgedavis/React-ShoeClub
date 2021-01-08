import { ADD_PRODUCT_CART } from "../actions/type";

const initialState = {
    basketNumbers: 0

}

export default (state = initialState, action) => {
   switch(action.type){
       case ADD_PRODUCT_CART:
         return {
             basketNumbers: this.basketNumbers + 1
         }
       default:
      return state;
    }
}