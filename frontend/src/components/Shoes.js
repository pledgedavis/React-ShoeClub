
    export const fetchAllPhotos = () => {
        return (dispatch) => {
            fetch('http://localhost:4000/photos')
            .then(resp => resp.json())
            .then(photos => dispatch({ type: 'FETCH_ALL_PHOTOS',
            payload: photos
        }))
    }
}