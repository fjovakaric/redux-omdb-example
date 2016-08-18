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