import { ADD_PRODUCT_CART, GET_NUMBERS_CART } from "../actions/type";

const initialState = {
   cartNumbers: 0,
   cartCost: 0,
   products: {
       yeezy: {
           name: "first yeezy",
           price: 330.00,
           quantity: 0,
           incart: false,
       },
       yeezy2: {
        name: "second yeezy",
        price: 330.00,
        quantity: 0,
        incart: false,
    },
    yeezy3: {
        name: "third yeezy",
        price: 390.00,
        quantity: 0,
        incart: false,
    }
   }


}

export default (state = initialState, action) => {
   switch(action.type){
       case ADD_PRODUCT_CART:
         return {
            cartNumbers: state.cartNumbers + 1
         }
         case GET_NUMBERS_CART:
             return {
                 ...state
             }
       default:
      return state;
    }
}