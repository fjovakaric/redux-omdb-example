import { combineReducers } from 'redux';

import movies from './redux/movies.reducer';
import ajaxStatus from './redux/ajax-status.reducer'

const rootReducer = combineReducers({
    movies,
    ajaxStatus
});

export default rootReducer;