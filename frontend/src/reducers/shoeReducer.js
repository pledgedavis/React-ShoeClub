export default (state = {shoes: [], loading: false}, action) => {
        switch(action.type) {  
            default:
                // the dispatched action is not in this reducer, return the state unchanged
                return state;
        }
    }








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