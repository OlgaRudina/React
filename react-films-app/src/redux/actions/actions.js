import axios from '../../axios/axios-films'
import { FETCH_FILMS_BEGIN, FETCH_FILMS_SUCCESS, FETCH_FILM_SUCCESS, FETCH_FILMS_FAILURE } from './actionTypes'

export function fetchFilms() {
    return async dispatch => {
        dispatch(fetchFilmsStart())
        try {
            const response = await axios.get('/films')
            const films = response.data
            dispatch(fetchFilmsSuccess(films))

        } catch (e) {
            dispatch(fetchFilmsError(e))
        }
    }

}

export function fetchFilmsStart() {
    return {
        type: FETCH_FILMS_BEGIN
    }
}


export function fetchFilmsSuccess(films) {
    return {
        type: FETCH_FILMS_SUCCESS,
        films
    }
}

export function fetchFilmsError(e) {
    return {
        type: FETCH_FILMS_FAILURE,
        error: e
    }
}



export function fetchFilmById(filmId) {
    return async dispatch => {
        dispatch(fetchFilmsStart())
        try {
            const response = await axios.get(`/films/${filmId}`)
            const film = response.data
            dispatch(fetchFilmSuccess(film))
        } catch (e) {
            dispatch(fetchFilmsError(e))

        }
    }
}

export function fetchFilmSuccess(film) {
    return {
        type: FETCH_FILM_SUCCESS,
        film
    }
}
