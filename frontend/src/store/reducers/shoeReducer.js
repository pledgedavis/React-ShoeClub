import * as ActionTypes from "../../constant/ActionTypes";

export const shoeListReducer = (state = { shoes: [], shoe: null }, action) => {
  switch (action.type) {
    case ActionTypes.GET_SHOES_REQUEST:
      // debugger;
      console.log("shoe reducer");
      return { ...state, loading: true };

    case ActionTypes.GET_SHOES_SUCCESS:
      return { ...state, loading: false, shoes: action.payload }; //action.payload.shoes

    case ActionTypes.GET_SHOES_FAIL:
      return { ...state, loading: false, error: action.payload };

    case ActionTypes.GET_SHOE:
      console.log("got shoe", action.payload);
      return { ...state, loading: false, shoe: action.payload };

    default:
      return state;
  }
};
// listens for actions
