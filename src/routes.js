import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './common-components/app/app';
import HomePage from './pages/home/home.container';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
    </Route>
);