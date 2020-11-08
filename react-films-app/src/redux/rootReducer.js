import {FETCH_FILMS_BEGIN, FETCH_FILMS_SUCCESS, FETCH_FILM_SUCCESS, FETCH_FILMS_FAILURE} from './actions/actionTypes'

const initialState = {
    films: [],
    loading: false,
    error: null,
    film: null,

}


export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_FILMS_BEGIN:
            return {
                ...state, loading: true
            }
        case FETCH_FILMS_SUCCESS:
            return {
                ...state, loading: false, films: action.films
            }
        case FETCH_FILMS_FAILURE:
            return {
                ...state, loading: false, error: action.error
            }
        case FETCH_FILM_SUCCESS:
            return {
                ...state, loading: false, film: action.film
            }

        default:
            return state
    }
}