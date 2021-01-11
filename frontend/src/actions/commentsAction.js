export const fetchAllComments(){
    return dispatch => { 
        dispatch({type: "LOADING_COMMENTS"})
    fetch('/shoes')
    .then(resp => resp.json())
    .then(shoes => dispatch({
        type: 'FETCHED_ALL_COMMENTS',
        payload: shoes
    }))
    };
}