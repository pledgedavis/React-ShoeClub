import * as ActionTypes from "../../constant/ActionTypes";

export const shoeListReducer = (state = { shoes: [] }, action) => {
  switch (action.type) {
    case ActionTypes.GET_SHOES_REQUEST:
      return { loading: true, shoes: [] };

    case ActionTypes.GET_SHOES_SUCCESS:
      return { loading: false, shoes: action.payload }; //action.payload.shoes

    case ActionTypes.GET_SHOES_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
