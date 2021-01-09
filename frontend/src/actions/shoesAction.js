import { FETCH_ALL_SHOES } from './type'



export const fetchAllShoes = () => {
    return dispatch => { 
            dispatch({type: "LOADING_SHOES"})
        fetch('/shoes')
        .then(resp => resp.json())
        .then(shoes => dispatch({
            type: 'FETCHED_ALL_SHOES',
            payload: shoes
        }))
    };
}

