import * as ActionTypes from "../../constant/ActionTypes";
// actions
export const getShoeList = () => async (dispatch) => {
  // debugger;
  console.log("shoes action folder fetch");
  try {
    dispatch({ type: ActionTypes.GET_SHOES_REQUEST });
    const response = await fetch("/shoes");
    const data = await response.json();
    // all shoes are stored inside of the response variable
    console.log(data, "shoe here");
    dispatch({
      type: ActionTypes.GET_SHOES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.GET_SHOES_FAIL,
      paylod: error.reponse,
      // error.response.data.message error.message
    });
  }
};

export const getSingleShoe = (id) => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.GET_SHOES_REQUEST });
    const response = await fetch(`/shoes/${id}`);
    const shoeData = await response.json();
    // console.log("single shoe data", shoeData);
    dispatch({
      type: ActionTypes.GET_SHOE,
      payload: shoeData,
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.GET_SHOE_FAIL,
      paylod: error.reponse,
      // error.response.data.message error.message
    });
  }
};

export const addShoe = (shoe) => {
  return (dispatch) => {
    dispatch({ type: "ADDING_SHOE" });
    fetch("/shoes", {
      method: "POST",
      body: JSON.stringify(shoe),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    })
      .then((response) => response.json())
      .then((shoe) => dispatch({ type: "SHOE_ADDED", payload: shoe }));
  };
};
