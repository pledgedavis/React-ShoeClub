import * as ActionTypes from "../../constant/ActionTypes";

export const shoeListReducer = (
  state = { comments: [], comment: null },
  action
) => {
  switch (action.type) {
    case ActionTypes.GET_COMMENT_REQUEST:
      return { ...state, loading: false, comment: action.payload };

    case ActionTypes.GET_COMMENT_SUCCESS:
      return { ...state, loading: false, comment: action.payload };

    case ActionTypes.COMMENT_ADDED:
      const newComment = action.payload;
      return {
        ...state,
        loading: false,
        comments: state.comments.concat(newComment),
      };

    case ActionTypes.DELETE_COMMENT:
      return { ...state, loading: false, comment: action.payload };
  }
};
