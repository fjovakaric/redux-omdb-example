import actionTypes from './constants';

const initialState = function() {
    return 0
};

function isSuccessAction(type) {
    return (type.indexOf('_SUCCESS') > 0);
}

export default function ajaxStatusReducer(state = initialState(), action) {
    if (action.type == actionTypes.BEGIN_AJAX_CALL) {
        return state + 1;
    } else if (isSuccessAction(action.type) ||
        action.type == actionTypes.AJAX_CALL_ERROR) {
        return state - 1;
    } else {
        return state;
    }
}