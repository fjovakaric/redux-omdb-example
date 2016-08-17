import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router';

import configureStore from './configureStore';
import routes from './routes';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './main.scss';

const store = configureStore();

render (
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('redux-omdb-example')
);
