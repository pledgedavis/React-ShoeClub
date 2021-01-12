import {
  GET_SHOES_FAIL,
  GET_SHOES_SUCCESS,
  GET_SHOES_REQUEST,
} from "../../constant/shoesConstant";

export const shoeListReducer = (state = { shoes: [] }, action) => {
  switch (action.type) {
    case GET_SHOES_REQUEST:
      return { loading: true, shoes: [] };

    case GET_SHOES_SUCCESS:
      return { loading: false, shoes: action.payload}; //action.payload.shoes

    case GET_SHOES_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

// export default (state = {shoes: [], loading: false}, action) => {

// switch(action.type) {
// depending on what type string is currently being returned this function will switch it on
// case "LOADING_SHOES":
// console.log("Starts here first")

// // If the actions type is loading this statement will return loading true
// return {...state, loading: true}
// case "FETCHED_ALL_SHOES":
// console.log("Second")

// return {...state, loading: false, shoes: action.payload}
// default:
//     return state;

//     }

// }

// function shoesReducer(state, action) {
//     switch(action.type) {
//         case FETCH_ALL_SHOES:
//             return {
//                 ...state,
//                 data: action.payload
//             }
//         break;

//         default:
//             // the dispatched action is not in this reducer, return the state unchanged
//             return state;
//     }
// }
