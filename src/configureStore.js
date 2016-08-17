import { createStore, compose } from 'redux';
import rootReducer from './root.reducer';

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        compose(
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );
}