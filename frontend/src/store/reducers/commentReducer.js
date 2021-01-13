import * as ActionTypes from "../../constant/ActionTypes";

export const shoeListReducer = (state = { shoes: [], shoe: null }, action) => {
  switch (action.type) {
    case ActionTypes.GET_COMMENT_REQUEST:
      return { ...state, loading: false, shoe: action.payload };

    case ActionTypes.GET_COMMENT_SUCCESS:
      return { ...state, loading: false, shoe: action.payload };

    case ActionTypes.ADD_COMMENT:
      return { ...state, loading: false, shoe: action.payload };

    case ActionTypes.COMMENT_ADDED:
      return { ...state, loading: false, shoe: action.payload };
  }
};
