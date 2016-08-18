import actionTypes from './constants';

import * as moviesApi from '../api/movies.api';

export function searchMovies(movieName) {
    return (dispatch) => {
        dispatch(beginAjaxCall());
        moviesApi
            .search(movieName)
            .then((result) => {
                dispatch(searchMoviesSuccess(result.data.Search));
            })
            .catch((err) => {
                dispatch(ajaxCallError(err));
            });
    }
}

export function searchMoviesSuccess(movies) {
    return {
        type: actionTypes.SEARCH_MOVIES_SUCCESS,
        movies
    }
}

export function getMovie(imdbID) {
    return (dispatch) => {
        dispatch(beginAjaxCall());
        moviesApi
            .get(imdbID)
            .then((result) => {
                dispatch(getMovieSuccess(result.data));
            })
            .catch((err) => {
                dispatch(ajaxCallError(err));
            });
    }
}

export function getMovieSuccess(movie) {
    return {
        type: actionTypes.GET_MOVIE_SUCCESS,
        movie
    }
}

export function clearActiveMovie() {
    return {
        type: actionTypes.CLEAR_ACTIVE_MOVIE
    }
}

export function beginAjaxCall() {
    return {
        type: actionTypes.BEGIN_AJAX_CALL
    };
}

export function ajaxCallError(error) {
    return {
        type: actionTypes.AJAX_CALL_ERROR,
        error
    };
}