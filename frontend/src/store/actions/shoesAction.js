import * as ActionTypes from "../../constant/ActionTypes";

export const getShoes = () => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.GET_SHOES_REQUEST });
    const response = await fetch("/shoes");
    const data = await response.json();
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

// import { FETCH_ALL_SHOES } from './type'
// export const fetchAllShoes = () => {
//     return dispatch => {
//             dispatch({type: "LOADING_SHOES"})
//         fetch('/shoes')
//         .then(resp => resp.json())
//         .then(shoes => dispatch({
//             type: 'FETCHED_ALL_SHOES',
//             payload: shoes
//         }))
//     };
// }
