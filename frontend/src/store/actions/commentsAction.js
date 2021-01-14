import * as ActionTypes from "../../constant/ActionTypes";
import { getSingleShoe } from "./shoesAction";

export const fetchAllComments = () => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.GET_COMMENTS_REQUEST });
    const response = await fetch("/comments");
    const data = await response.json();
    console.log(data, "comment here");
    dispatch({
      type: ActionTypes.GET_COMMENTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.GET_COMMENTS_FAIL,
      paylod: error.reponse,
      // error.response.data.message error.message
    });
  }
};

export const addComment = (comment) => {
  return (dispatch) => {
    fetch("/comments", {
      method: "POST",
      body: JSON.stringify(comment),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((comment) => {
        console.log("comment response", comment);
        dispatch({ type: "COMMENT_ADDED", payload: comment });
        dispatch(getSingleShoe(comment.shoe_id));
      });
  };
};
