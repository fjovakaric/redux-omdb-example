import actionTypes from './constants';

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