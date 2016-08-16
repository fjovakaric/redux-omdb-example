import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';

import routes from './routes';

import '../node_modules/bootstrap/dist/css/bootstrap.css';

render (
    <Router history={browserHistory} routes={routes} />,
    document.getElementById('redux-omdb-example')
);
