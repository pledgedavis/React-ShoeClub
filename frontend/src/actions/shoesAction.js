export const fetchAllShoes = () => {
    return (dispatch) => {
        fetch('http://localhost:3001/shoes')
        .then(resp => resp.json())
        .then(shoes => dispatch({
            type: 'FETCH_ALL_SHOES',
            payload: shoes
        }))
    }
}